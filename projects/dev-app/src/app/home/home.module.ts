import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SignupComponent } from './features/signup/signup.component';
import { SignupSuccessComponent } from './features/signup-success/signup-success.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PeakCoreModule } from '@core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, SignupComponent, SignupSuccessComponent, DashboardComponent],
  imports: [CommonModule, PeakCoreModule, HomeRoutingModule],
})
export class HomeModule { }
