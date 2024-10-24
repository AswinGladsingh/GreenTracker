import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeadershipBoardComponent } from './leadershipboard/leadershipboard.component';
import { CommunityComponent } from './community/community.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { RegisterComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'leadershipboard', component: LeadershipBoardComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'news', component: NewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Add the login route
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
   // Add the login route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
