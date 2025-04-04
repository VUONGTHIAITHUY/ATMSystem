import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AtmManagementState } from './atm-management.reducer';

export const selectAtmManagementState =
  createFeatureSelector<AtmManagementState>('atmManagement');

export const selectAllAtms = createSelector(
  selectAtmManagementState,
  (state) => state.atms
);

export const selectTotalAtm = createSelector(
  selectAtmManagementState,
  (state) => state.count
)
