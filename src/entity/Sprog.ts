import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Sprog {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Dansk: string;

  @Column()
  Engelsk: string;

  @Column()
  Sanskrit: string;

  @Column()
  Tibetansk: string;

  @Column()
  Tysk: string;
}
