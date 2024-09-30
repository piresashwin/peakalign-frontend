import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from 'projects/theme/src/lib/theme.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
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
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [],
})
export class SharedModule { }
