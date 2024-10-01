import { AuthService, SubscriptionService } from '@abp/ng.core';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupDto, SignupService } from '@proxy/accounts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers: [SubscriptionService]
})
export class SignupComponent {

  roleOptions = [
    {
      key: 1,
      value: "Manager"
    },
    {
      key: 2,
      value: "Employee"
    }
  ]

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  errors: { message: string }[] = [];

  /**
   *
   */
  constructor(private signupService: SignupService
    , private subscriptions: SubscriptionService
    , private router: Router
    , private authService: AuthService) {

  }

  signup() {
    this.errors = [];

    if (this.form.invalid)
      return;

    const form = this.form.value;

    const obs$ = this.signupService.signup({
      companyName: form.companyName,
      email: form.email,
      password: form.password,
      name: form.name,
      position: form.role
    } as SignupDto)

    this.subscriptions.addOne(obs$,
      (result) => {
        this.router.navigate(["/signup/success"], { state: { success: true } })
      }, (error: HttpErrorResponse) => {

        const err = error.error?.error;

        if (err?.code == "Volo.Abp.TenantManagement:DuplicateTenantName") {
          this.errors.push({ message: "Company Already exists" })
          return;
        }

        if (err?.code == "OKR.Accounts.Password") {
          JSON.parse(err?.message)?.forEach(e => {
            this.errors.push({ message: e?.Description })
          })

          return;
        }

        this.errors.push({ message: err.message });
      })
  }

  login() {
    this.authService.navigateToLogin();
  }

}
