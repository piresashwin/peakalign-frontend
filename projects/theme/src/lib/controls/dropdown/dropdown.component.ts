import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, ContentChild, ElementRef, forwardRef, Input, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

export interface DropdownOption {
  key: string | number;
  value: string;
}

@Component({
  selector: 'theme-dropdown',
  templateUrl: './dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor, Validator, AfterViewInit {
  @Input() options: DropdownOption[] = [];
  @Input() placeholder = 'Select an option';
  @Input() multiple = false;
  @Input() required = false;

  @ViewChild('trigger') trigger!: ElementRef;
  @ViewChild('dropdownPanel') dropdownPanel!: TemplateRef<any>;
  @ContentChild('optionTemplate') optionTemplate!: TemplateRef<any>;
  @ContentChild('valueTemplate') valueTemplate!: TemplateRef<any>;

  selectedValues: (string | number)[] = [];
  isOpen = false;
  private overlayRef: OverlayRef | null = null;
  private triggerWidth: number = 0;

  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.triggerWidth = this.trigger.nativeElement.offsetWidth;
  }

  writeValue(value: any): void {
    this.selectedValues = this.multiple ? (value || []) : (value ? [value] : []);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement disable logic if needed
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required && this.selectedValues.length === 0) {
      return { required: true };
    }
    return null;
  }

  toggleDropdown(): void {
    this.isOpen ? this.closeDropdown() : this.openDropdown();
  }

  openDropdown(): void {
    if (!this.overlayRef) {
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(this.trigger)
        .withPositions([{
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        }]);
      this.overlayRef = this.overlay.create({
        positionStrategy,
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        width: this.triggerWidth // Set the width of the overlay
      });

      this.overlayRef.backdropClick().subscribe(() => this.closeDropdown());
      const portal = new TemplatePortal(this.dropdownPanel, this.viewContainerRef);
      this.overlayRef.attach(portal);
    }
    this.isOpen = true;
  }

  closeDropdown(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
    }
    this.isOpen = false;
  }

  onOptionClick(option: DropdownOption): void {
    if (this.multiple) {
      const index = this.selectedValues.indexOf(option.key);
      if (index > -1) {
        this.selectedValues.splice(index, 1);
      } else {
        this.selectedValues.push(option.key);
      }
    } else {
      this.selectedValues = [option.key];
      this.closeDropdown();
    }
    this.onChange(this.multiple ? this.selectedValues : this.selectedValues[0]);
    this.onTouched();
  }

  isSelected(option: DropdownOption): boolean {
    return this.selectedValues.includes(option.key);
  }

  getDisplayValue(): string {
    if (this.selectedValues.length === 0) {
      return this.placeholder;
    }
    return this.selectedValues
      .map(key => this.options.find(option => option.key === key)?.value)
      .filter(Boolean)
      .join(', ');
  }
}