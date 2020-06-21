import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjMedie1592760509714 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE medie (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                OptagelseId INT,
                Længde INT,
                Hemmeligt TINYINT,
                Politisk TINYINT,
                Placering TINYTEXT,
                CONSTRAINT FK_Medie_Optagelse FOREIGN KEY (OptagelseId) REFERENCES optagelse(Id)
                )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE medie");
  }
}
