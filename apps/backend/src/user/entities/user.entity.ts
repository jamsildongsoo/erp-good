//apps/backend/src/user/entities/user.entity.ts
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity.js';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' , length: 50 })
  companyId: string;

  @PrimaryColumn({ type: 'varchar' , length: 50 })
  userId: string;

  @Column({ type: 'varchar', length: 100 })
  userName: string;

  @Column({ type: 'varchar', length: 100 })
  address: string;

  @Column({ type: 'varchar', length: 100 })
  deptId: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 100 })
  position: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;
}
