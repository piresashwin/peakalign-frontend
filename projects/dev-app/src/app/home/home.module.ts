import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SignupComponent } from './features/signup/signup.component';
import { SignupSuccessComponent } from './features/signup-success/signup-success.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@NgModule({
  declarations: [HomeComponent, SignupComponent, SignupSuccessComponent, DashboardComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule { }
