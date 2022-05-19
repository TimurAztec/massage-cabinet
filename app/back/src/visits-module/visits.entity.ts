import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('visits')
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client_name: string;

  @Column({default: ''})
  client_email: string;

  @Column()
  client_phone: string;

  @Column({default: ''})
  comment: string;

  @Column()
  type: number;
}