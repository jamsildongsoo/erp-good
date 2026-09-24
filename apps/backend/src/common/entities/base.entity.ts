// apps/backend/src/common/entities/base.entity.ts
import { CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

export abstract class BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: true })
  createdBy!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  updatedBy!: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @Column({ type: 'char', length: 1, default: 'N' })
  deleteYN!: string; // 'Y' 또는 'N'
}