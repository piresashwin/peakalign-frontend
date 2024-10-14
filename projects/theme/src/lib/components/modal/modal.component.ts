import { trigger, transition, style, animate } from '@angular/animations';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'theme-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'scale(1.05)', opacity: 0, filter: 'blur(6px)' }),
        animate('.2s ease-in', style({ transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' })),
      ]),
      transition(':leave', [
        style({
          transform: 'scale(1) translateY(0px)',
          opacity: 1,
          filter: 'blur(0px)',
        }),
        animate('.2s ease-in', style({ transform: 'scale(.95)', opacity: 0, filter: 'blur(6px)' })),
      ]),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  @Input()
  open = false;

  @Input()
  autoClose: boolean = false;

  @Input()
  autoWidth: boolean = false;

  @Input()
  title: string = "";

  /**
   *
   */
  constructor(private dialogRef: DialogRef) {

  }
  ngOnInit(): void {
    this.dialogRef.disableClose = !this.autoClose;
  }

  close() {
    this.dialogRef.close("cancel");
  }
}
