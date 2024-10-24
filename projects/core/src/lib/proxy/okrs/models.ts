import type { OKRLevel } from './okrlevel.enum';
import type { DeadlineType } from './deadline-type.enum';
import type { OwnerType } from './owner-type.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateKeyResultDto {
  title?: string;
  objectiveId?: string;
  description?: string;
  targetValue: number;
  currentValue: number;
  deadline?: string;
}

export interface CreateOKRDto {
  title?: string;
  description?: string;
  owners: ObjectiveOwnerDto[];
  sessionId?: string;
  okrLevel: OKRLevel;
  keyResults: CreateKeyResultDto[];
  deadline?: string;
  deadlineType: DeadlineType;
}

export interface CreateSessionDto {
  name?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface KeyResultDto {
  id?: string;
  title?: string;
  description?: string;
  targetValue: number;
  currentValue: number;
  objectiveId?: string;
}

export interface OKRDto {
  id?: string;
  title?: string;
  description?: string;
  ownerId?: string;
  teamId?: string;
  sessionId?: string;
  okrLevel: OKRLevel;
  keyResults: KeyResultDto[];
}

export interface ObjectiveOwnerDto {
  objectiveId?: string;
  ownerId?: string;
  ownerType: OwnerType;
}

export interface SessionDto extends AuditedEntityDto<string> {
  companyId?: string;
  name?: string;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
}

export interface UpdateKeyResultDto {
  id?: string;
  objectiveId?: string;
  title?: string;
  targetValue: number;
  deadline?: string;
}

export interface UpdateOKRDto {
  title?: string;
  description?: string;
  owners: ObjectiveOwnerDto[];
  sessionId?: string;
  okrLevel: OKRLevel;
  keyResults: UpdateKeyResultDto[];
  deadline?: string;
}
