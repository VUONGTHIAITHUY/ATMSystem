import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtmManagementActions } from '../../store/atm-management/atm-management.actions';
import { MatDialog } from '@angular/material/dialog';
import { DetailAtmComponent } from '../../../pages/detail-atm/detail-atm.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private matDialog: MatDialog) {}

  onSearch() {
    // Implement search functionality here
    console.log('Searching for:', this.searchQuery);
  }

  openDialog() {
    const dialogRef = this.matDialog.open(DetailAtmComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
