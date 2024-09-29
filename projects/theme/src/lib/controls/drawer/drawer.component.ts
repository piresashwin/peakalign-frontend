import { trigger, state, style, transition, animate } from '@angular/animations';
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
        transform: 'translateX(100%)',
      })),
      state('open', style({
        transform: 'translateX(0%)',
      })),
      transition('closed => open', animate('300ms ease-in')),
      transition('open => closed', animate('300ms ease-out')),
    ]),
  ],
})
export class DrawerComponent {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Output() drawerClosed = new EventEmitter<void>();

  @ViewChild('drawerContent') drawerContent: TemplateRef<any>;

  private overlayRef: OverlayRef;
  isOpen = false;

  constructor(private overlay: Overlay) { }

  open() {
    this.isOpen = true;
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().right('0'),
      hasBackdrop: true,
      backdropClass: 'bg-gray-500 bg-opacity-50',
    });

    const templatePortal = new TemplatePortal(this.drawerContent, null);
    this.overlayRef.attach(templatePortal);

    this.overlayRef.backdropClick().subscribe(() => this.close());
  }

  close() {
    this.isOpen = false;
    setTimeout(() => {
      if (this.overlayRef) {
        this.overlayRef.dispose();
        this.drawerClosed.emit();
      }
    }, 300); // Wait for the animation to complete
  }
}
