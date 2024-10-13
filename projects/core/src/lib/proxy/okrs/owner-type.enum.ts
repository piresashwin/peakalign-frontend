import { mapEnumToOptions } from '@abp/ng.core';

export enum OwnerType {
  Individual = 1,
  Team = 2,
}

export const ownerTypeOptions = mapEnumToOptions(OwnerType);
