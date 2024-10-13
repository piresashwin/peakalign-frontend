import type { SignupDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  apiName = 'Default';
  

  signup = (request: SignupDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/okr/accounts/signup',
      body: request,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
