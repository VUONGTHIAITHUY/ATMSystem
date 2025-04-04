import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { ATMManagement } from '../../models/atm-management.model';

export const AtmManagementActions = createActionGroup({
  source: 'AtmManagement',
  events: {
    loadAtms: props<{
      search: string;
      page: number;
      limit: number;
    }>(),
    'Load Atms Success': props<{ atms: ATMManagement[] }>(),
    'Load Atms Failure': props<{ error: any }>(),

    createAtm: props<{ body: ATMManagement }>(),
    'Create Atm Success': emptyProps(),
    'Create Atm Failure': props<{ error: any }>(),

    updateAtm: props<{ body: ATMManagement }>(),
    'Update Atm Success': emptyProps(),
    'Update Atm Failure': props<{ error: any }>(),

    deleteAtm: props<{ body: ATMManagement }>(),
    'Delete Atm Success': emptyProps(),
    'Delete Atm Failure': props<{ error: any }>(),
  },
});
