import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { path: '/', label: 'Dashboard', icon: 'dashboard' },
    { path: '/atms', label: 'ATMs', icon: 'atm' },
    { path: '/transactions', label: 'Transactions', icon: 'receipt' },
    { path: '/reports', label: 'Reports', icon: 'assessment' },
    { path: '/settings', label: 'Settings', icon: 'settings' }
  ];
}
