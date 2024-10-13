import type { CreateOKRDto, OKRDto, UpdateOKRDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OKRsService {
  apiName = 'Default';
  

  create = (input: CreateOKRDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OKRDto>({
      method: 'POST',
      url: '/api/okrs',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/okrs/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OKRDto>({
      method: 'GET',
      url: `/api/okrs/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getByOwner = (ownerId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OKRDto[]>({
      method: 'GET',
      url: `/api/okrs/by-owner/${ownerId}`,
    },
    { apiName: this.apiName,...config });
  

  getBySession = (sessionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OKRDto[]>({
      method: 'GET',
      url: `/api/okrs/by-session/${sessionId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateOKRDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OKRDto>({
      method: 'PATCH',
      url: '/api/okrs',
      params: { id },
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
