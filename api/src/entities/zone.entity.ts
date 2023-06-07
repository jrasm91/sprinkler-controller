import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('zone')
export class ZoneEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ nullable: true })
  ranAt!: Date | null;

  /** Zone is enabled (for scheduling, manual control, etc.) */
  @Column()
  enabled!: boolean;

  /** Zone is currently running */
  @Column()
  running!: boolean;

  /** Zone label */
  @Column()
  name!: string;

  /** Pin number of the Pi (GPIO) */
  @Column()
  pin!: number;

  /** Optional zone label */
  @Column({ nullable: true })
  color!: string | null;

  /** Optional zone label */
  @Column({ nullable: true })
  relay!: number | null;
}
