import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Sprog } from "./Sprog";

@Entity()
export class Oversætter {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Navn: string;

  @ManyToOne((_type) => Sprog, (inverseSide) => inverseSide.Id)
  Sprog: Sprog;

  @Column()
  Land: string;
}
