import { mapEnumToOptions } from '@abp/ng.core';

export enum DeadlineType {
  Soft = 1,
  Hard = 2,
}

export const deadlineTypeOptions = mapEnumToOptions(DeadlineType);
