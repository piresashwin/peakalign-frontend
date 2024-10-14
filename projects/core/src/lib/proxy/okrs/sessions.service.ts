import type { CreateSessionDto, SessionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  apiName = 'Default';
  

  create = (request: CreateSessionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SessionDto>({
      method: 'POST',
      url: '/api/okr/sessions',
      body: request,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/okr/sessions/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SessionDto>({
      method: 'GET',
      url: `/api/okr/sessions/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SessionDto[]>({
      method: 'GET',
      url: '/api/okr/sessions/all',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, request: CreateSessionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SessionDto>({
      method: 'PATCH',
      url: `/api/okr/sessions/${id}`,
      body: request,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
