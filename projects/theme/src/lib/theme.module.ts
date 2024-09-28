import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './controls/input/input.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    InputComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
  ],
  exports: [
    InputComponent,
    DropdownComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThemeModule { }
