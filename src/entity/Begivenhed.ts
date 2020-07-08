import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Sted } from "./Sted";

@Entity()
export class Begivenhed {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Navn: string;

  @ManyToOne((_type) => Sted, (Sted) => Sted.Begivenheder)
  public sted: Sted;

  @Column()
  StartDato: Date;

  @Column()
  SlutDato: Date;
}
