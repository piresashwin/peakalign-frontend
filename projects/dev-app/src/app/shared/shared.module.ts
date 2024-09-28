import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from 'projects/theme/src/lib/theme.module';


@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    // ThemeSharedModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule
  ],
  exports: [
    CoreModule,
    // ThemeSharedModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
  ],
  providers: [],
})
export class SharedModule { }
