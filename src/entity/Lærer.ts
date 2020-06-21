import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Lærer {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Navn: string;

    @Column()
    Linje: string;

    @Column()
    Diamantvej: boolean;
}
