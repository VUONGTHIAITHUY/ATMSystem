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
      ofType(AtmManagementActions.createAtm),
      switchMap((action) =>
        this.atmManagementService.createAtm(action.body).pipe(
          map(() => AtmManagementActions.createAtmSuccess()),
          catchError((error) =>
            of(AtmManagementActions.loadAtmsFailure({ error }))
          )
        )
      )
    )
  );

  updateAtmAtmEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AtmManagementActions.updateAtm),
      switchMap((action) =>
        this.atmManagementService.updateAtm(action.id, action.body).pipe(
          map(() => AtmManagementActions.updateAtmSuccess()),
          catchError((error) =>
            of(AtmManagementActions.loadAtmsFailure({ error }))
          )
        )
      )
    )
  );

  deleteAtmAtmEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AtmManagementActions.deleteAtm),
      switchMap((action) =>
        this.atmManagementService.delete(action.id).pipe(
          map(() => AtmManagementActions.loadAtms({search: ""})),
          catchError((error) =>
            of(AtmManagementActions.deleteAtmFailure({ error }))
          )
        )
      )
    )
  );

  getAtmByIdEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AtmManagementActions.getATMById),
      switchMap((action) =>
        this.atmManagementService.getATMById(action.id).pipe(
          map((atm) => AtmManagementActions.getAtmSuccess({ atm })),
          catchError((error) =>
            of(AtmManagementActions.getAtmFailure({ error }))
          )
        )
      )
    )
  );
}
