import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjDag1592742646740 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE dag (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn VARCHAR(80), 
                BegivenhedId INT, 
                Dato DATETIME,
                CONSTRAINT FK_Dag_Begivenhed FOREIGN KEY (BegivenhedId) REFERENCES begivenhed(Id)
                )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE dag");
  }
}
