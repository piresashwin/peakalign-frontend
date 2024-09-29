import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dialog } from '@angular/cdk/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private static instance: DialogService | null = null

  constructor(private dialog: Dialog) {
    DialogService.instance = this;
  }

  open<T, V>(component: ComponentType<T>, data: V) {
    return this.dialog.open(component, data).closed;
  }

  public static getInstance() {
    return DialogService.instance;
  }

  confirm<T, V>(component: ComponentType<T>, data: V): Observable<any> {
    return this.dialog.open(component, { data: data, disableClose: true }).closed
  }
}
