import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { API_CONFIG } from '../config/api.config';
import { AlertService } from '../services/alert.service';

@Component({
  standalone: true,
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class LoginPageComponent {
  @ViewChild('loginForm') loginForm!: NgForm; 

  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;
  submitted: boolean = false;
  loginFailed: boolean = false;

  username: string = 'Rani';
  password: string = 'Rani123';

  constructor(
    private router: Router,
    private alertService: AlertService
  ) {}
  
  async login(loginForm: NgForm) {
    // Prevent multiple submissions
    if (this.isLoading) {
      return;
    }

    this.submitted = true;
    this.loginFailed = false;
    
    if (!loginForm.valid) {
      return;
    }
  
    const { username, password } = loginForm.value;
    this.isLoading = true;
  
    try {
      const response = await fetch(`${API_CONFIG.baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok || !data.success) {
        this.loginFailed = true;
        throw new Error(data.message || 'Login failed');
      }
  
      // ✅ Store user data in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('employeeId', data.employeeId || data.userId);
      localStorage.setItem('username', data.username || data.email);
      localStorage.setItem('role', data.role);
      localStorage.setItem('userId', data.userId);
      
  
      this.alertService.success(`Login successful! Welcome ${data.username || data.email}`);
  
      if (data.role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.router.navigate(['/right']); 
      }

    } catch (error: unknown) {
      this.loginFailed = true;
      this.alertService.error(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      this.isLoading = false;
    }
  }
}