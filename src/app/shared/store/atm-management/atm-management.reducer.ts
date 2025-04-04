// user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AtmManagementActions } from './atm-management.actions';
import { ATMManagement } from '../../models/atm-management.model';

export interface AtmManagementState {
  atms: ATMManagement[];
  error: any;
  count: number;
  atm: ATMManagement | null;
  page: number;
  limit: number;
}

const initialState: AtmManagementState = {
  atms: [],
  count: 0,
  error: null,
  atm: null,
  limit: 10,
  page: 1,
};

export const atmManagementReducer = createReducer(
  initialState,
  on(AtmManagementActions.loadAtmsSuccess, (state, { atms }) => ({
    ...state,
    atms,
    count: atms?.length,
  })),
  on(AtmManagementActions.loadAtmsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
