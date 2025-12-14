import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-resignation-approval',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, MatIconModule],
  templateUrl: './resignation-approval.component.html',
  styleUrls: ['./resignation-approval.component.css']
})
export class ResignationApprovalComponent implements OnInit {
  resignationRequests: any[] = [];

  activeTab: 'approved' | 'rejected' = 'approved';

  approvedResignations: any[] = [];
  rejectedResignations: any[] = [];

  expandedReasons: { [key: string]: boolean } = {};
  readonly MAX_REASON_LENGTH = 50;

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.fetchPendingResignations();
  }

  fetchPendingResignations(): void {
    this.http.get<any[]>(`${API_CONFIG.baseUrl}/resignation/pending`)
      .subscribe({
        next: (data) => {
          this.resignationRequests = data.map(r => ({
            ...r,
            empName: r.empName || r.employeeName,   // ✅ mapping added
            empCode: r.empCode || r.employeeCode,   // ✅ mapping added
            lastWorkingDay: r.lastWorkingDay || r.lastWorkingDate, 
            expanded: false
          }));
        },
        error: (err) => {
          console.error('❌ Error fetching resignations:', err);
        }
      });
  }

  toggleRequest(index: number) {
    this.resignationRequests[index].expanded = !this.resignationRequests[index].expanded;
  }

  approveResignation(index: number) {
    const request = this.resignationRequests[index];

    const approvedResignation = {
      ...request,
      approvedDate: new Date(),
      status: 'Approved'
    };

    this.http.put(`${API_CONFIG.baseUrl}/resignation/approve`, {
      empCode: request.empCode
    }).subscribe({
      next: () => {
        this.approvedResignations.push(approvedResignation);
        this.resignationRequests.splice(index, 1);
        this.alertService.success('Resignation approved successfully.');
        console.log('✅ Resignation approved:', approvedResignation);
      },
      error: (err) => {
        this.alertService.error('Error approving resignation.');
        console.error('❌ Error approving resignation:', err);
      }
    });
  }

  rejectResignation(index: number) {
    const request = this.resignationRequests[index];

    const rejectedResignation = {
      ...request,
      rejectedDate: new Date(),
      rejectionReason: 'Manager rejected'
    };

    this.http.put(`${API_CONFIG.baseUrl}/resignation/reject`, {
      empCode: request.empCode
    }).subscribe({
      next: () => {
        this.rejectedResignations.push(rejectedResignation);
        this.resignationRequests.splice(index, 1);
        this.alertService.success('Resignation rejected.');
        console.log('❌ Resignation rejected:', rejectedResignation);
      },
      error: (err) => {
        this.alertService.error('Error rejecting resignation.');
        console.error('❌ Error rejecting resignation:', err);
      }
    });
  }

  getReasonKey(resignation: any, type: 'approved' | 'rejected' | 'rejected-reason'): string {
    return `${type}-${resignation.empCode || resignation.empName || Math.random()}`;
  }

  isReasonExpanded(resignation: any, type: 'approved' | 'rejected' | 'rejected-reason'): boolean {
    const key = this.getReasonKey(resignation, type);
    return Boolean(this.expandedReasons[key]);
  }

  toggleReason(resignation: any, type: 'approved' | 'rejected' | 'rejected-reason'): void {
    const key = this.getReasonKey(resignation, type);
    this.expandedReasons[key] = !Boolean(this.expandedReasons[key]);
  }

  getTruncatedReason(reason: string | null | undefined): string {
    if (!reason) return '';
    if (reason.length <= this.MAX_REASON_LENGTH) return reason;
    return reason.substring(0, this.MAX_REASON_LENGTH) + '...';
  }

  shouldShowViewMore(reason: string | null | undefined): boolean {
    return Boolean(reason && reason.length > this.MAX_REASON_LENGTH);
  }
}
