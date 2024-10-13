import { Component, ContentChild, forwardRef, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface RadioButtonGroupOption {
  key: string;
  value: any;
}


@Component({
  selector: 'theme-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrl: './radio-button-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonGroupComponent),
      multi: true,
    },
  ],
})
export class RadioButtonGroupComponent implements ControlValueAccessor {
  @Input() options: RadioButtonGroupOption[] = [];
  @Input() selectedKey!: string;

  @ContentChild('buttonTemplate', { static: false })
  buttonTemplate?: TemplateRef<any>;

  onChange: any = () => { };
  onTouch: any = () => { };

  writeValue(value: any): void {
    this.selectedKey = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement this if you want to handle the disabled state
  }
 
  selectOption(key: string) {
    this.selectedKey = key;
    this.onChange(key);
    this.onTouch();
  }
}