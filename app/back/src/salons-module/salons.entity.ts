import { User } from "src/users-module/users.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('salons')
export class Salon {
  @PrimaryGeneratedColumn({type: 'integer'})
  id: number;

  @Column({type: 'text'})
  name: string;

  @Column({type: 'text'})
  address: string;

  @Column({type: 'text'})
  contacts: string;

  @OneToOne(() => User)
  @JoinColumn()
  owner: User;

}