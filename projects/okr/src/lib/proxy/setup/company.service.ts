import type { CompanyDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  apiName = 'Default';
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompanyDto>({
      method: 'GET',
      url: `/api/okr/companies/${id}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
