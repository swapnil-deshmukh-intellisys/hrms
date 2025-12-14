import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { API_CONFIG } from '../config/api.config';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-resignation',
  standalone: true,
  templateUrl: './resignation.component.html',
  styleUrls: ['./resignation.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatIconModule]
})
export class ResignationComponent {
  resignationForm: FormGroup;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) {
    this.resignationForm = this.fb.group({
      employeeCode: ['', Validators.required],
      employeeName: ['', Validators.required],
      department: ['', Validators.required],
      lastWorkingDate: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  toggleForm() {
    this.showForm = true;
  }

  submitResignation() {
    if (this.resignationForm.valid) {
      this.http.post(`${API_CONFIG.baseUrl}/resignation/submit`, this.resignationForm.value)
        .subscribe({
          next: () => {
            this.alertService.success('Resignation submitted successfully.');
            this.resignationForm.reset();
            this.showForm = false;
          },
          error: (error: any) => {
            this.alertService.error('Error submitting resignation.');
            console.error(error);
          }
        });
    } else {
      this.alertService.warning('Please fill out all fields correctly.');
    }
  }

  cancelForm() {
    this.resignationForm.reset();
  }
}
