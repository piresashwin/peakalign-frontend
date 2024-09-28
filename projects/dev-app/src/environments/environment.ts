import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'OKR',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44381/',
    redirectUri: baseUrl,
    clientId: 'OKR_App',
    responseType: 'code',
    scope: 'offline_access OKR',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44381',
      rootNamespace: 'PeakAlign.OKR',
    },
    OKR: {
      url: 'https://localhost:44382',
      rootNamespace: 'PeakAlign.OKR',
    },
  },
} as Environment;
