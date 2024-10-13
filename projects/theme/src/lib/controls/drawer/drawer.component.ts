import { trigger, state, style, transition, animate } from '@angular/animations';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'theme-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
  animations: [
    trigger('slideInOut', [
      state('closed', style({
        transform: 'translateX(120%)',
        opacity: 0, // Fully transparent when closed
      })),
      state('open', style({
        transform: 'translateX(0%)',
        opacity: 1, // Fully visible when open
      })),
      transition('closed => open', [
        animate('300ms ease-in', style({
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ]),
      transition('open => closed', [
        animate('300ms ease-out', style({
          transform: 'translateX(120%)',
          opacity: 0
        }))
      ]),
    ]),
  ]
})
export class DrawerComponent {

  @Input("autoClose")
  set autoClose(autoClose: boolean) {
    this.dialogRef.disableClose = !autoClose;
  }
  /**
   *
   */
  constructor(private dialogRef: DialogRef) {

  }

  @Input()
  title: string = "";

  isOpen = true;

  close() {
    this.isOpen = false;

    setTimeout(() => {
      this.dialogRef.close("cancel");
    }, 300);
  }

}
