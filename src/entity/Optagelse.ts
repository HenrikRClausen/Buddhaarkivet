import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Session } from "./Session";

@Entity()
export class Optagelse {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne((_) => Session, (inverseSide) => inverseSide.Id)
  Session: Session;

  @Column()
  ErVideo: boolean;

  @Column()
  Længde: number;

  @Column()
  Formatd: string;

  @Column()
  Bitrate: number;

  @Column()
  Højde: number;

  @Column()
  Bredde: number;
}
