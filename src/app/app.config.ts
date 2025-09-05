import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Routing aktivating
    provideRouter(APP_ROUTES),
    // HTTP-Client für API-Requests with Fetch
    provideHttpClient(withFetch()),
    // ReactiveForms for FormBuilder + Validators
    importProvidersFrom(ReactiveFormsModule)
  ]
};
export const APP_CONFIG = {
siteTitle: 'Mein Portfolio',
contactEndpoint: '/api/contact' // adapt when backend is needed
};
