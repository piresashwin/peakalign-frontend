import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderComponent } from '../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading$ = new BehaviorSubject(false);

  private ref: OverlayRef


  constructor(private overlay: Overlay) {
    this.ref = this.overlay.create();

    this.setup();
  }


  private setup() {

    this.loading$.subscribe(loading => {


      if (loading && !this.ref.hasAttached())
        this.ref.attach(new ComponentPortal(LoaderComponent))

      if (!loading && this.ref.hasAttached)
        this.ref.detach();


    })


  }

  show() {
    if (this.loading$.value == false)
      this.loading$.next(true);
  }

  hide() {
    this.loading$.next(false);
  }
}
