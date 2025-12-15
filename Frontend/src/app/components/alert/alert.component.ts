import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AlertService, AlertMessage } from '../../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="alert-container">
      <div
        *ngFor="let alert of alerts"
        [class]="'alert alert-' + alert.type"
      >
        <mat-icon class="alert-icon">{{ getIcon(alert.type) }}</mat-icon>
        <span class="alert-message">{{ alert.message }}</span>
        <button class="alert-close" (click)="removeAlert(alert.id)" type="button">
          <mat-icon>close</mat-icon>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  alerts: AlertMessage[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.subscription = this.alertService.alerts$.subscribe(alert => {
      this.alerts.push(alert);
      if (alert.duration && alert.duration > 0) {
        setTimeout(() => {
          this.removeAlert(alert.id);
        }, alert.duration);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeAlert(id: string): void {
    this.alerts = this.alerts.filter(alert => alert.id !== id);
  }

  getIcon(type: string): string {
    const icons: { [key: string]: string } = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return icons[type] || 'info';
  }
}

