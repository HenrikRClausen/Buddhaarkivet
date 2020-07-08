import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Optagelse } from "./Optagelse";

@Entity()
export class Medie {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne((_) => Optagelse, (inverseSide) => inverseSide.Id)
  Optagelse: Optagelse;

  @Column()
  Længde: number;

  @Column()
  Hemmeligt: boolean;

  @Column()
  Politisk: boolean;

  @Column()
  Placering: string;
}
