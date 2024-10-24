import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, AppRoutingModule)
  ]
}).catch(err => console.error(err));
