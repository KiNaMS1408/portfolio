// src/app/app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Routing aktivieren
    provideRouter(APP_ROUTES),
    // HTTP-Client für API-Requests
    provideHttpClient(),
    // ReactiveForms für FormBuilder + Validators
    importProvidersFrom(ReactiveFormsModule)
  ]
};
export const APP_CONFIG = {
siteTitle: 'Mein Portfolio',
contactEndpoint: '/api/contact' // anpassen, wenn du ein Backend hast
};
