// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import your components
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logIn', component: LogInComponent },
  // more routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
