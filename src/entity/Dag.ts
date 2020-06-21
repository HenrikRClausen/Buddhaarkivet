import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Begivenhed } from "./Begivenhed";
import { Sted } from "./Sted";

@Entity()
export class Dag {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Navn: string;

    @ManyToOne(_ => Begivenhed, inverseSide => inverseSide.Id)
    public Begivenhed: Begivenhed;

    @Column()
    Dato: Date;
}
