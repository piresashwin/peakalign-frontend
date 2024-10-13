import { mapEnumToOptions } from '@abp/ng.core';

export enum OKRLevel {
  Company = 0,
  Individual = 1,
  Team = 2,
}

export const okrLevelOptions = mapEnumToOptions(OKRLevel);
