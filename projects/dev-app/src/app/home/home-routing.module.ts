import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignupComponent } from './features/signup/signup.component';
import { SignupSuccessComponent } from './features/signup-success/signup-success.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from '@abp/ng.core';
import { AppLayoutComponent } from '@core';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Sign Up'
  },
  {
    path: 'signup/success',
    component: SignupSuccessComponent,
    title: 'Sign Up - Success'
  },
  {
    path: 'dashboard',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        title: 'Dashboard'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
