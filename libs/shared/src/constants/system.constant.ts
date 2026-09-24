//libs/shared/src/constants/system.constant.ts
export const MODULE_CODE = {
  ORG: 'Organization',
  COD: 'Code',

  EQT: 'Equipment', 
  PM: 'Preventive Maintenance',
  WO: 'Work Order', 
  WP: 'Work Permit', 
  
  MAT: 'Material', 
  PR: 'Purchase Request', 
  PO: 'Purchase Order',
  INV: 'Inventory', 
  
  APR: 'Approval', 
  BRD: 'Board'
} as const

export const DOCUMENT_STATUS = {
  D : 'Draft', 
  P : 'Progress',
  C : 'Confirm', 
  R : 'Reject', 
  X : 'Cancel'
} as const

export const PERMISSION_ACTION = {
  CREATE: 'C',
  READ: 'R',
  UPDATE: 'U',
  DELETE: 'D',
} as const;