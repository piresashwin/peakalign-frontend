import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  /**
   *
   */
  constructor(private authService: AuthService) {
    if (!this.isLoggedIn) {
      authService.navigateToLogin();
    }
  }

  get isLoggedIn() {
    return this.authService.isAuthenticated;
  }
}
