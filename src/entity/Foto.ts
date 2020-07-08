import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Dag } from "./Dag";
import { Sted } from "./Sted";

@Entity()
export class Foto {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne((_) => Sted, (inverseSide) => inverseSide.Id)
  Sted: Sted;

  @ManyToOne((_) => Dag, (inverseSide) => inverseSide.Id)
  Dag: Dag;

  @Column()
  Dato: Date;

  @Column()
  Farve: boolean;

  @Column()
  Højde: number;

  @Column()
  Bredde: number;
}
