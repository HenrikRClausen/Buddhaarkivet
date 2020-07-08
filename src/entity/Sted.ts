import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Begivenhed } from "./Begivenhed";

@Entity()
export class Sted {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Navn: string;

  @Column()
  Lokation: string;

  @Column()
  Land: string;

  @Column()
  Begivenheder: Begivenhed[];
}
