import { SubscriptionService } from '@abp/ng.core';
import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionsService } from '@proxy/okrs';

@Component({
  selector: 'okr-create-session-modal',
  templateUrl: './create-session-modal.component.html',
  styleUrl: './create-session-modal.component.css',
  providers: [SubscriptionService]
})
export class CreateSessionModalComponent {


  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  })

  /**
   *
   */
  constructor(private dialogRef: DialogRef,
    private sessionsService: SessionsService
    , private subscriptions: SubscriptionService) {

  }

  submit() {
    debugger
    const form = this.form.value;

    if (!this.form.valid)
      return;

    const obs$ = this.sessionsService.create({
      name: form.name,
      startDate: form.startDate,
      endDate: form.endDate,
      description: form.description,

    })

    this.subscriptions.addOne(obs$, (response) => {
      this.dialogRef.close(response);
    })

  }

}
