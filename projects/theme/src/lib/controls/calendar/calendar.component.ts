import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'theme-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  @Input() value: Date | null;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  currentMonth: number;
  currentYear: number;
  days: (Date | null)[] = [];
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years: number[] = [];

  dateSelected = new Subject<Date>();

  ngOnInit() {
    const currentDate = this.value || new Date();
    this.currentMonth = currentDate.getMonth();
    this.currentYear = currentDate.getFullYear();
    this.generateYears();
    this.generateCalendar();
  }

  generateYears() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 100; i <= currentYear + 100; i++) {
      this.years.push(i);
    }
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    this.days = [];

    // Add empty days for the start of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      this.days.push(null);
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      this.days.push(new Date(this.currentYear, this.currentMonth, i));
    }

    // Add empty days for the end of the month
    const remainingDays = 7 - (this.days.length % 7);
    if (remainingDays < 7) {
      for (let i = 0; i < remainingDays; i++) {
        this.days.push(null);
      }
    }
  }

  onMonthChange() {
    this.generateCalendar();
  }

  onYearChange() {
    this.generateCalendar();
  }

  selectDate(date: Date | null) {
    if (date && !this.isDisabled(date)) {
      this.dateSelected.next(date);
    }
  }

  isDisabled(date: Date | null): boolean {
    return !date || (this.minDate && date < this.minDate) || (this.maxDate && date > this.maxDate);
  }

  isSelected(date: Date | null): boolean {
    return this.value != null && date != null && date.toDateString() === this.value.toDateString();
  }
}
