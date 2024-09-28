import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SignupComponent } from './features/signup/signup.component';

@NgModule({
  declarations: [HomeComponent, SignupComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule { }
