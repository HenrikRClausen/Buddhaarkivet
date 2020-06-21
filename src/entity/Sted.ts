import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
}
