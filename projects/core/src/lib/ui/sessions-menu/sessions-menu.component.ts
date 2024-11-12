import { SubscriptionService } from '@abp/ng.core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SessionDto } from '@proxy/okrs';
import { CreateSessionModalComponent } from 'projects/okr/src/lib/features/create-session-modal/create-session-modal.component';
import { DialogService } from 'projects/theme/src/lib/services/dialog.service';
import { filter } from 'rxjs';
import { menuAnimation } from '../../snimations/animations';


@Component({
  selector: 'pa-sessions-menu',
  templateUrl: './sessions-menu.component.html',
  styleUrl: './sessions-menu.component.css',
  providers: [SubscriptionService],
  animations: [
    menuAnimation
  ]
})
export class SessionsMenuComponent {

  _sessions = [];

  @Input()
  set sessions(sessions: SessionDto[]) {
    if (sessions.length) {
      this.selectedSessionKey = sessions[0]?.id;
      this.sessionChange.emit(sessions.find(x => x.id == this.selectedSessionKey));
    }

    this._sessions = sessions;
  };

  get sessions() {
    return this._sessions;
  }

  @Output()
  sessionChange = new EventEmitter<SessionDto | null>();


  selectedSessionKey;

  /**
   *
   */
  constructor(private dialogService: DialogService, private subscriptions: SubscriptionService) {

  }

  get isSessionAvailable() {
    return this.sessions.length;
  }

  openNewSessionModal() {
    const obs$ = this.dialogService.open(CreateSessionModalComponent, {
      data: {}
    }).pipe(filter(response => response != "cancel"))

    this.subscriptions.addOne(obs$, (response) => {

    })
  }

  get currentSession() {
    return this.selectedSessionKey ? this.sessions.find(x => x.id == this.selectedSessionKey) : "";
  }

  onSessionChange(session) {
    this.selectedSessionKey = session.id;
  }
}
