import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './controls/input/input.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DatepickerComponent } from './controls/datepicker/datepicker.component';
import { CalendarComponent } from './controls/calendar/calendar.component';
import { ToggleComponent } from './controls/toggle/toggle.component';
import { DrawerComponent } from './controls/drawer/drawer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './controls/button/button.component';
import { RadioButtonGroupComponent } from './controls/radio-button-group/radio-button-group.component';
import { JsPlumbCanvasComponent } from './components/js-plumb-canvas/js-plumb-canvas.component';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [
    InputComponent,
    DropdownComponent,
    DatepickerComponent,
    CalendarComponent,
    ToggleComponent,
    DrawerComponent,
    LoaderComponent,
    ModalComponent,
    ButtonComponent,
    RadioButtonGroupComponent,
    JsPlumbCanvasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    CdkMenuModule
  ],
  exports: [
    InputComponent,
    DropdownComponent,
    DatepickerComponent,
    CalendarComponent,
    ToggleComponent,
    DrawerComponent,
    LoaderComponent,
    ModalComponent,
    ButtonComponent,
    RadioButtonGroupComponent,
    JsPlumbCanvasComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThemeModule { }
