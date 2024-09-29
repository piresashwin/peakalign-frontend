import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, NgZone, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'theme-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent {

  @ViewChild('trigger', { static: true }) trigger: ElementRef;
  @ViewChild('container', { static: true }) container: ElementRef;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  displayValue: string = '';
  value: Date | null = null;
  disabled: boolean = false;
  private overlayRef: OverlayRef | null = null;
  private destroy$ = new Subject<void>();

  private onChange: (value: Date | null) => void = () => { };
  private onTouched: () => void = () => { };

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  writeValue(value: Date | null): void {
    this.value = value;
    this.updateDisplayValue();
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null;
    }

    if (this.minDate && value < this.minDate) {
      return { min: { min: this.minDate, actual: value } };
    }

    if (this.maxDate && value > this.maxDate) {
      return { max: { max: this.maxDate, actual: value } };
    }

    return null;
  }

  toggleCalendar(): void {
    this.onTouched();
    if (this.disabled) {
      return;
    }

    if (this.overlayRef) {
      this.closeCalendar();
    } else {
      this.openCalendar();
    }
  }

  openCalendar(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.container)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 8
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -8
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      width: '256px',
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });

    const calendarPortal = new ComponentPortal(CalendarComponent);
    const calendarRef = this.overlayRef.attach(calendarPortal);

    calendarRef.instance.value = this.value;
    calendarRef.instance.minDate = this.minDate;
    calendarRef.instance.maxDate = this.maxDate;

    calendarRef.instance.dateSelected
      .pipe(takeUntil(this.destroy$))
      .subscribe((date: Date) => {
        this.value = date;
        this.updateDisplayValue();
        this.onChange(this.value);
        this.closeCalendar();
      });

    this.ngZone.runOutsideAngular(() => {
      fromEvent(document, 'click')
        .pipe(
          filter((event: Event) => {
            const clickTarget = event.target as HTMLElement;
            return (
              !!this.overlayRef &&
              !this.elementRef.nativeElement.contains(clickTarget) &&
              !this.overlayRef.overlayElement.contains(clickTarget)
            );
          }),
          takeUntil(this.destroy$)
        )
        .subscribe(() => this.ngZone.run(() => this.closeCalendar()));
    });
  }

  closeCalendar(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  private updateDisplayValue(): void {
    this.displayValue = this.value ? this.formatDate(this.value) : '';
    this.cdr.detectChanges();
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.closeCalendar();
  }
}
