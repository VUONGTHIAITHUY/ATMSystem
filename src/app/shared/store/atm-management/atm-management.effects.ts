// user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AtmManagementActions } from './atm-management.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ATMManagement } from '../../models/atm-management.model';
import { AtmManagementService } from '../../../services/atm-management.service';

@Injectable()
export class AtmManagementEffects {
  constructor(
    private actions$: Actions,
    private atmManagementService: AtmManagementService
  ) {}

  loadAtms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AtmManagementActions.loadAtms),
      switchMap((action) =>
        this.atmManagementService
          .getAtms(action.search, action.limit, action.page)
          .pipe(
            map((atms: ATMManagement[]) =>
              AtmManagementActions.loadAtmsSuccess({ atms })
            ),
            catchError((error) =>
              of(AtmManagementActions.loadAtmsFailure({ error }))
            )
          )
      )
    )
  );

  createAtmEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AtmManagementActions.loadAtms),
      switchMap((action) =>
        this.atmManagementService
          .getAtms(action.search, action.limit, action.page)
          .pipe(
            map((atms: ATMManagement[]) =>
              AtmManagementActions.loadAtmsSuccess({ atms })
            ),
            catchError((error) =>
              of(AtmManagementActions.loadAtmsFailure({ error }))
            )
          )
      )
    )
  );

  updateAtmAtmEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AtmManagementActions.loadAtms),
      switchMap((action) =>
        this.atmManagementService
          .getAtms(action.search, action.limit, action.page)
          .pipe(
            map((atms: ATMManagement[]) =>
              AtmManagementActions.loadAtmsSuccess({ atms })
            ),
            catchError((error) =>
              of(AtmManagementActions.loadAtmsFailure({ error }))
            )
          )
      )
    )
  );
}
