import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { atmManagementReducer } from './shared/store/atm-management/atm-management.reducer';
import { AtmManagementEffects } from './shared/store/atm-management/atm-management.effects';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    provideStore({
      atmManagement: atmManagementReducer,
    }),
    provideEffects([AtmManagementEffects]),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
      BrowserAnimationsModule
    ),
  ],
};
