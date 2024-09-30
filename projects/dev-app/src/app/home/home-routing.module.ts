import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignupComponent } from './features/signup/signup.component';
import { SignupSuccessComponent } from './features/signup-success/signup-success.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AppLayoutComponent } from '../app-layout/app-layout.component';
import { authGuard } from '@abp/ng.core';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signup/success',
    component: SignupSuccessComponent,
  },
  {
    path: 'dashboard',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
