import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OkrManagementComponent } from './features/okr-management/okr-management.component';
import { PeakCoreModule } from '@core';

const routes: Routes = [
  {
    path: "okr",
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
      },
      {
        path: 'home',
        component: OkrManagementComponent,
        title: 'OKR Management'
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PeakCoreModule],
  exports: [RouterModule],
})
export class OKRRoutingModule { }
