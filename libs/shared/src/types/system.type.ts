//libs/shared/src/types/system.type.ts
import { MODULE_CODE, DOCUMENT_STATUS, PERMISSION_ACTION } from '../constants/system.constant.js';

export type ModuleCode = typeof MODULE_CODE[keyof typeof MODULE_CODE];
export type DocumentStatus = typeof DOCUMENT_STATUS[keyof typeof DOCUMENT_STATUS];  
export type PermissionAction = typeof PERMISSION_ACTION[keyof typeof PERMISSION_ACTION];