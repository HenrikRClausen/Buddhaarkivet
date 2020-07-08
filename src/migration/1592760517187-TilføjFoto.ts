import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjFoto1592760517187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE foto (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn VARCHAR(80),
                DagId INT,
                StedId INT,
                Dato DATETIME,
                Farve TINYINT,
                Højde INT,
                Bredde INT,
                CONSTRAINT FK_Foto_Dag FOREIGN KEY (DagId) REFERENCES dag(Id),
                CONSTRAINT FK_Foto_Sted FOREIGN KEY (StedId) REFERENCES sted(Id)
                )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE foto");
  }
}
