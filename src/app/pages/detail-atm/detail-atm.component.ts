import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AtmManagementActions } from '../../shared/store/atm-management/atm-management.actions';
import { ATMManagement } from '../../shared/models/atm-management.model';
import { Actions, ofType } from '@ngrx/effects';

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
export class DetailAtmComponent implements OnInit {
  mode: 'add' | 'edit' | 'view' = 'add';
  id!: number;
  formGroup!: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DetailAtmComponent>,
    private actions: Actions,
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: 'add' | 'edit' | 'view'; id: number }
  ) {}

  ngOnInit(): void {
    this.mode = this.data?.mode;
    this.id = this.data?.id;

    this.formGroup = this.formBuilder.group({
      name: [''],
      manufacturer: [''],
      type: [''],
      serialNumber: [''],
      image: [''],
    });

    this.updateSuccess();
    this.createSuccess();
    this.patchData();

    if(this.mode === "edit" || this.mode === "view") {
      this.getDetail(this.id);
    }
  }

  getDetail(id: number): void {
    this.store.dispatch(AtmManagementActions.getATMById({ id }));
  }

  patchData(): void {
      this.actions
      .pipe(ofType(AtmManagementActions.getAtmSuccess))
      .subscribe((res) => {
        if(res){
          this.formGroup.patchValue(res.atm); 
        }
      });
  }

  onSubmit(): void {
    const body = this.formGroup.value as ATMManagement;
    if (this.mode === 'edit') {
      this.updateATM(body);
    } else {
      this.createATM(body);
    }
  }

  createATM(body: ATMManagement): void {
    this.store.dispatch(
      AtmManagementActions.createAtm({
        body,
      })
    );
  }

  updateATM(body: ATMManagement): void {
    this.store.dispatch(
      AtmManagementActions.updateAtm({
        id: this.id, 
        body
      })
    );
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  updateSuccess(): void {
    this.actions
      .pipe(ofType(AtmManagementActions.updateAtmSuccess))
      .subscribe(() => {
        this.onCloseDialog();
      });
  }

  createSuccess(): void {
    this.actions
      .pipe(ofType(AtmManagementActions.createAtmSuccess))
      .subscribe(() => {
        this.onCloseDialog();
      });
  }
}
