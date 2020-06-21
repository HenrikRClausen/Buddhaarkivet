import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Sted } from "./Sted";

@Entity()
export class Begivenhed {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Navn: string;

    @ManyToOne(_ => Sted, inverseSide => inverseSide.Id)
    public Sted: Sted;

    @Column()
    StartDato: Date;

    @Column()
    SlutDato: Date;
}
