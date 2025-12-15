import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AlertMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<AlertMessage>();
  public alerts$ = this.alertSubject.asObservable();
  private alertId = 0;

  show(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info', duration: number = 4000): void {
    const alert: AlertMessage = {
      id: `alert-${this.alertId++}`,
      type,
      message,
      duration
    };
    this.alertSubject.next(alert);
  }

  success(message: string, duration?: number): void {
    this.show(message, 'success', duration);
  }

  error(message: string, duration?: number): void {
    this.show(message, 'error', duration);
  }

  warning(message: string, duration?: number): void {
    this.show(message, 'warning', duration);
  }

  info(message: string, duration?: number): void {
    this.show(message, 'info', duration);
  }
}

