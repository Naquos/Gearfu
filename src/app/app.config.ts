import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HammerModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { provideServiceWorker } from '@angular/service-worker';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    importProvidersFrom([
      
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          }),HammerModule
    ]), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ]
};
