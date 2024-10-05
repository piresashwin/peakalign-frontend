import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OKRComponent } from './components/o-kR.component';
import { OkrManagementComponent } from './features/okr-management/okr-management.component';

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
        component: OkrManagementComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OKRRoutingModule { }
