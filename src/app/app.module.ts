// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LeadershipBoardComponent } from './leadershipboard/leadershipboard.component';
import { CommunityComponent } from './community/community.component';
import { NewsComponent } from './news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    HomeComponent,
    LeadershipBoardComponent,
    CommunityComponent,
    NewsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],  
  providers: [],
  bootstrap: [] // Leave this empty if you are bootstrapping the AppComponent standalone
})
export class AppModule {}
