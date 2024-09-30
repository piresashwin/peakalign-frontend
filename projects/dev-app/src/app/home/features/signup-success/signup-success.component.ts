import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pa-signup-success',
  templateUrl: './signup-success.component.html',
  styleUrl: './signup-success.component.scss'
})
export class SignupSuccessComponent {

  /**
   *
   */
  constructor(private router: Router) {
    const state = router.getCurrentNavigation().extras.state;

    if (!state?.success)
      this.router.navigate(["/signup"]);
  }
}
