import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { OKRComponent } from './components/o-kR.component';
import { OKRRoutingModule } from './o-kR-routing.module';
import { OkrManagementComponent } from './features/okr-management/okr-management.component';
import { CreateObjectiveComponent } from './features/create-objective/create-objective.component';
import { CreateKeyresultComponent } from './features/create-keyresult/create-keyresult.component';
import { AlignmentVisualizationComponent } from './features/alignment-visualization/alignment-visualization.component';
import { OkrListComponent } from './features/okr-list/okr-list.component';
import { ObjectiveDetailsComponent } from './features/objective-details/objective-details.component';
import { KeyresultDetailsComponent } from './features/keyresult-details/keyresult-details.component';

@NgModule({
  declarations: [OKRComponent, OkrManagementComponent, CreateObjectiveComponent, CreateKeyresultComponent, AlignmentVisualizationComponent, OkrListComponent, ObjectiveDetailsComponent, KeyresultDetailsComponent],
  imports: [CoreModule, ThemeSharedModule, OKRRoutingModule],
  exports: [OKRComponent],
})
export class OKRModule {
  static forChild(): ModuleWithProviders<OKRModule> {
    return {
      ngModule: OKRModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<OKRModule> {
    return new LazyModuleFactory(OKRModule.forChild());
  }
}
