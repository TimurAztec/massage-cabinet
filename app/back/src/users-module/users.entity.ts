import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({type: 'integer'})
  id: number;

  @Column({type: 'text'})
  first_name: string;

  @Column({type: 'text'})
  last_name: string;

  @Column({type: 'text', array: true})
  emails: string[];

  @Column({type: 'text', array: true, nullable: true})
  phones: string[];

  @Column({type: 'text'})
  password: string;
}
