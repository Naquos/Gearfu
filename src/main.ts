import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { AppComponent } from './app/components/app/app.component';

bootstrapApplication(AppComponent, {...config, providers: [provideZoneChangeDetection(), ...config.providers]})
  .catch((err) => console.error(err));
