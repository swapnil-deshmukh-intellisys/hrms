import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';

@Injectable({ providedIn: 'root' })
export class ResignationService {
  private apiUrl = `${API_CONFIG.baseUrl}/resignation`;

  constructor(private http: HttpClient) {}

  submitForm(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
