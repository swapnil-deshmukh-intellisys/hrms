import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

// Define the Leave interface if not already defined or import it from the correct location
export interface Leave {
  id: string;
  employeeId: string;
  startDate: string;
  endDate: string;
  type: string;
  status: string;
  reason?: string;
  rejectionReason?: string;
  rejectedBy?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  constructor(private http: HttpClient) {}

  getAllLeaves(): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.baseUrl}/leave/all`);
  }

  submitLeave(leaveData: any): Observable<any> {
    return this.http.post(`${API_CONFIG.baseUrl}/leave/submit`, leaveData);
  }

  getHolidays(): Observable<any[]> {
    return this.http.get<any[]>(`${API_CONFIG.baseUrl}/holidays`);
  }

  approveLeave(id: string): Observable<any> {
    return this.http.patch(`${API_CONFIG.baseUrl}/leave/approve/${id}`, {});
  }

  rejectLeave(id: string, rejectedBy: string, reason: string) {
  return this.http.patch(`${API_CONFIG.baseUrl}/leave/reject/${id}`, {
    rejectedBy,
    rejectionReason: reason
  });
}
getRejectedLeaves() {
  return this.http.get<Leave[]>(`${API_CONFIG.baseUrl}/leave/rejected`);
}

  getDashboardStats(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.baseUrl}/admin/stats`);
  }

  getDashboardCharts(): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.baseUrl}/admin/chart-data`);
  }
}
