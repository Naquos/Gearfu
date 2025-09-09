import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { AppComponent } from './app/components/app/app.component';

bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
