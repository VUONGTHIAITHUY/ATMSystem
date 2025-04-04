import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { ATMManagement } from '../../shared/models/atm-management.model';
import { Observable, map, startWith } from 'rxjs';
import {
  selectAllAtms,
  selectTotalAtm,
} from '../../shared/store/atm-management/atm-management.selector';
import { Store } from '@ngrx/store';
import { AtmManagementActions } from '../../shared/store/atm-management/atm-management.actions';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-atm',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './list-atm.component.html',
  styleUrl: './list-atm.component.scss',
})
export class ListAtmComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'name',
    'manufacturer',
    'serialNumber',
    'image',
  ];

  // Pagination properties
  pageSizeOptions = [5, 10, 20];
  totalItems$: Observable<number> = new Observable();

  // Observable for the paginated data
  paginatedData$: Observable<ATMManagement[]> = new Observable();
  atmManagement$: Observable<ATMManagement[]> = new Observable();

  page: number = 1;
  limit: number = 10;
  search: string = '';
  formGroup!: FormGroup;

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadAtm();
    this.getAtms();
    this.getTotal();
  }

  loadAtm(): void {
    this.store.dispatch(
      AtmManagementActions.loadAtms({
        search: this.search,
        limit: this.limit,
        page: this.page,
      })
    );
  }

  getAtms(): void {
    this.atmManagement$ = this.store.select(selectAllAtms);
  }

  getTotal(): void {
    this.totalItems$ = this.store.select(selectTotalAtm);
  }

  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.loadAtm();
  }

  view(data: ATMManagement): void {
    
  }

  edit(element: any): void {
    console.log('Edit clicked', element);
    // Add your edit logic here
  }

  delete(element: any): void {
    console.log('Delete clicked', element);
    // Add your delete logic here
  }
}
