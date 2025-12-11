import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private baseUrl = API_CONFIG.baseUrl;

  constructor(private http: HttpClient) {}

  // ✅ Fetch attendance by employeeCode
  getAttendanceByEmployee(employeeCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/attendance/${employeeCode}`);
  }

  // Optional: Fetch with date range
  getAttendanceByDateRange(employeeCode: string, startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/attendance/${employeeCode}?startDate=${startDate}&endDate=${endDate}`);
  }
}
