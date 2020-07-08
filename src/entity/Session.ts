import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Dag } from "./Dag";
import { Lærer } from "./Lærer";
import { Oversætter } from "./Oversætter";
import { Sprog } from "./Sprog";

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne((_) => Dag, (inverseSide) => inverseSide.Id)
  Dag: Dag;

  @ManyToOne((_) => Lærer, (inverseSide) => inverseSide.Id)
  Lærer: Lærer;

  @ManyToOne((_) => Oversætter, (inverseSide) => inverseSide.Id)
  Oversætter: Oversætter;

  @ManyToOne((_) => Sprog, (inverseSide) => inverseSide.Id)
  Sprog: Sprog;

  @ManyToOne((_) => Sprog, (inverseSide) => inverseSide.Id)
  OversatSprog: Sprog;

  @Column()
  Starttidspunkt: Date;
}
