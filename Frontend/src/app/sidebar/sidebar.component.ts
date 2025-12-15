import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for standalone components
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,  // Indicates this is a standalone component
  imports: [CommonModule, RouterModule, NgIf, MatIconModule],  // Import CommonModule for built-in Angular features like ngIf, ngFor, etc.
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isDropdownOpen = {
    payroll: false
  };
  role: string = '';

  ngOnInit(): void {
    this.role = localStorage.getItem('role') || '';
  }

  toggleDropdown(section: keyof typeof this.isDropdownOpen): void {
    this.isDropdownOpen[section] = !this.isDropdownOpen[section];
  }
}
