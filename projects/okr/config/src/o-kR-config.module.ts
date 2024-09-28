import { ModuleWithProviders, NgModule } from '@angular/core';
import { OKR_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class OKRConfigModule {
  static forRoot(): ModuleWithProviders<OKRConfigModule> {
    return {
      ngModule: OKRConfigModule,
      providers: [OKR_ROUTE_PROVIDERS],
    };
  }
}
