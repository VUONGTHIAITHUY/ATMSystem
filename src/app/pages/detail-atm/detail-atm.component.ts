import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-atm',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './detail-atm.component.html',
})
export class DetailAtmComponent {
  form = new FormGroup({
    name: new FormControl(''),
    manufacturer: new FormControl(''),
    type: new FormControl(''),
    serialNumber: new FormControl(''),
    image: new FormControl(''),
  });

  constructor() {
  }

  onSubmit(): void {
    
  }
}