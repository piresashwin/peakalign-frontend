import { Injectable, Injector, ComponentRef, InjectionToken, StaticProvider } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject, Observable } from 'rxjs';

export interface PortalData<T, R> {
  component: any;
  data?: T;
}

export interface PortalResult<R> {
  componentRef: ComponentRef<any>;
  afterClosed: Observable<R>;
}

export const PORTAL_DATA = new InjectionToken<any>('PORTAL_DATA');

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private overlayRef: OverlayRef | null = null;
  private componentRef: ComponentRef<any> | null = null;
  private afterClosedSubject = new Subject<any>();

  constructor(private overlay: Overlay, private injector: Injector) { }

  open<T, R>(config: PortalData<T, R>): PortalResult<R> {
    // Create overlay if not already open
    if (this.overlayRef) {
      this.close();  // Close existing overlay before opening a new one
    }

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'bg-gray-500 bg-opacity-50',
      positionStrategy: this.overlay.position().global().right('0')
    });

    const injector = this.createInjector(config.data);
    const portal = new ComponentPortal(config.component, null, injector);
    this.componentRef = this.overlayRef.attach(portal);

    this.overlayRef.backdropClick().subscribe(() => this.close());

    return {
      componentRef: this.componentRef,
      afterClosed: this.afterClosedSubject.asObservable()
    };
  }

  close(result?: any): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
    this.afterClosedSubject = new Subject<any>(); // Reset subject for the next call
  }

  private createInjector(data: any): Injector {
    const providers: StaticProvider[] = [
      { provide: PORTAL_DATA, useValue: data }
    ];
    return Injector.create({ providers, parent: this.injector });
  }
}
