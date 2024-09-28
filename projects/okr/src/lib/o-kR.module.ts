import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { OKRComponent } from './components/o-kR.component';
import { OKRRoutingModule } from './o-kR-routing.module';

@NgModule({
  declarations: [OKRComponent],
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
