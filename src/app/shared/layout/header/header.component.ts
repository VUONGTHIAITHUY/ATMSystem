import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtmManagementActions } from '../../store/atm-management/atm-management.actions';
import { MatDialog } from '@angular/material/dialog';
import { DetailAtmComponent } from '../../../pages/detail-atm/detail-atm.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private matDialog: MatDialog, private store: Store) {}

  onSearch() {
    // Implement search functionality here
    this.store.dispatch(
      AtmManagementActions.loadAtms(
        {
          search: this.searchQuery
        }
      )
    )
  }

  openDialog() {
    const dialogRef = this.matDialog.open(DetailAtmComponent, {
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
