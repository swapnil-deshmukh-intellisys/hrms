import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { API_CONFIG } from '../config/api.config';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, DatePipe],
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  username: string = '';
  employeeCode: string = '';
  employeeImage: string = 'assets/employee (1).png';
  showNotifications = false;
  notifications: any[] = [];
  unreadNotificationsCount = 0;
  
  private readonly API_URL = `${API_CONFIG.baseUrl}/employees`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.loadUserInfo();
    this.loadNotifications();
  }

  loadUserInfo(): void {
    // Try to get from localStorage first
    const storedUsername = localStorage.getItem('username');
    const storedEmployeeCode = localStorage.getItem('employeeId');
    
    if (storedUsername) {
      this.username = storedUsername;
    }
    if (storedEmployeeCode) {
      this.employeeCode = storedEmployeeCode;
    }

    // Fetch from API
    const headers = this.createAuthHeaders();
    if (!headers.get('Authorization')) {
      return; // No token, skip API call
    }

    // Get username from /profile endpoint
    this.http.get<any>(`${this.API_URL}/profile`, { headers }).subscribe({
      next: (data) => {
        // Check for username in success response
        if (data?.success && data.username) {
          this.username = data.username;
          localStorage.setItem('username', this.username);
        }
        
        // Also check for employee object (for employeeCode and image)
        const emp = data?.employee;
        if (emp) {
          // Use employee name if username wasn't found
          if (!this.username && emp.name) {
            this.username = emp.name;
            localStorage.setItem('username', emp.name);
          }
          
          this.employeeCode = emp.employeeCode || storedEmployeeCode || 'N/A';
          if (emp.employeeCode) {
            localStorage.setItem('employeeId', emp.employeeCode);
          }
          
          this.employeeImage = emp.image?.startsWith('http')
            ? emp.image
            : emp.image
              ? `${API_CONFIG.baseUrl.replace('/api', '')}/${emp.image}`
              : 'assets/employee (1).png';
        } else if (!this.username && storedUsername) {
          // Fallback to stored username if no API data
          this.username = storedUsername;
        }
      },
      error: (err) => {
        console.error('Error loading user info:', err);
        // Use fallback values from localStorage
        this.username = storedUsername || 'Guest';
        this.employeeCode = storedEmployeeCode || 'N/A';
      }
    });
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      // Reload notifications when opening popup to get latest data
      this.loadNotifications();
      this.markNotificationsAsRead();
    }
  }

  loadNotifications(): void {
    const headers = this.createAuthHeaders();
    if (!headers.get('Authorization')) {
      console.warn('No authorization token found. Cannot load notifications.');
      return; // No token, skip loading notifications
    }
    
    // Get userId (employeeCode) - required by backend API
    const userId = this.employeeCode || localStorage.getItem('employeeId');
    
    if (!userId) {
      console.warn('No userId (employeeCode) found. Cannot load notifications.');
      // Try to get it from user info first
      this.loadUserInfo();
      // Retry after a short delay if employeeCode gets loaded
      setTimeout(() => {
        const retryUserId = this.employeeCode || localStorage.getItem('employeeId');
        if (retryUserId) {
          this.loadNotificationsWithUserId(retryUserId);
        }
      }, 500);
      return;
    }
    
    this.loadNotificationsWithUserId(userId);
  }

  private loadNotificationsWithUserId(userId: string): void {
    const headers = this.createAuthHeaders();
    
    // Backend requires userId as query parameter
    this.http.get<any>(`${API_CONFIG.baseUrl}/notifications?userId=${userId}`, { headers }).subscribe({
      next: (res) => {
        console.log('Notifications loaded:', res);
        let allNotifications = res?.notifications || res || [];
        
        // Filter to show only leave, resignation, and attendance notifications for admin
        this.notifications = allNotifications.filter((n: any) => {
          return n.type === 'leave' || n.type === 'resignation' || n.type === 'attendance';
        });
        
        // Debug: Log all notifications and their isRead status
        console.log('All notifications:', allNotifications);
        console.log('Filtered notifications (admin only):', this.notifications);
        this.notifications.forEach((n, index) => {
          console.log(`Notification ${index}:`, { title: n.title, type: n.type, isRead: n.isRead, actionRoute: n.actionRoute });
        });
        
        // Count unread notifications: isRead is false, undefined, or null
        const unreadNotifications = this.notifications.filter(n => {
          const isUnread = n.isRead === false || n.isRead === undefined || n.isRead === null || !n.isRead;
          return isUnread;
        });
        this.unreadNotificationsCount = unreadNotifications.length;
        
        console.log('Total filtered notifications:', this.notifications.length);
        console.log('Unread notifications:', unreadNotifications);
        console.log('Unread count:', this.unreadNotificationsCount);
      },
      error: (err) => {
        console.error('Error loading notifications:', err);
        // Set empty array on error to prevent undefined issues
        this.notifications = [];
        this.unreadNotificationsCount = 0;
      },
    });
  }

  markNotificationsAsRead(): void {
    const headers = this.createAuthHeaders();
    
    // Backend requires userId in request body
    const userId = this.employeeCode || localStorage.getItem('employeeId');
    
    if (!userId) {
      console.warn('No userId (employeeCode) found. Cannot mark notifications as read.');
      return;
    }
    
    this.http.post(`${API_CONFIG.baseUrl}/notifications/mark-as-read`, { userId }, { headers }).subscribe({
      next: () => {
        this.notifications = this.notifications.map(notification => ({
          ...notification,
          isRead: true
        }));
        this.unreadNotificationsCount = 0;
      },
      error: (err) => console.error('Error marking notifications as read:', err),
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  handleNotificationClick(notification: any): void {
    if (notification.actionRoute) {
      // Close notification popup
      this.showNotifications = false;
      // Navigate to the action route
      this.router.navigate([notification.actionRoute]);
    }
  }

  private createAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  // Detect clicks outside the notification popup to auto-close
  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.showNotifications) {
      this.showNotifications = false;
    }
  }
}
