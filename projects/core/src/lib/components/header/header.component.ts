import { AuthService, SubscriptionService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '@core';
import { filter } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'pa-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [SubscriptionService]
})
export class HeaderComponent implements OnInit {

  user: any;

  /**
   *
   */
  constructor(private oAuthService: OAuthService, private userDataService: UserDataService, private subscriptions: SubscriptionService) {

    const obs$ = userDataService.GlobalConfig$.pipe(
      filter(x => x != null),
    )

    subscriptions.addOne(obs$, (response) => {
      this.user = response?.user;
    })

  }

  ngOnInit(): void {
    this.loadUserData();
  }

  private loadUserData() {
    const obs$ = this.userDataService.loadUserData();
    this.subscriptions.addOne(obs$, () => { });
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
  }

}
