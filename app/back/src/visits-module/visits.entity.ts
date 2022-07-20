import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('visits')
export class Visit {
  @PrimaryGeneratedColumn({type: 'integer'})
  id: number;

  @Column({type: 'text'})
  client_name: string;

  @Column({type: 'text', default: ''})
  client_email: string;

  @Column({type: 'text'})
  client_phone: string;

  @Column({type: 'text', default: ''})
  comment: string;

  @Column({type: 'integer'})
  type: number;
}