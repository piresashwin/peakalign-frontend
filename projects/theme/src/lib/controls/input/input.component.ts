import { Component, forwardRef, Input, OnInit, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'theme-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',

})
export class InputComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: string = '';
  @Input() value: string = '';

  @Input() icon: string = '';
  @Input() validations: { [key: string]: any } = {};

  onChange: any = () => { };
  onTouched: any = () => { };

  isInvalid = false;

  get validationErrors() {
    return this.control.control.errors;
  }


  /**
   *
   */
  constructor(@Self() protected control: NgControl) {
    control.valueAccessor = this;

    
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
