import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjOversætter1592760473588 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE oversætter (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn VARCHAR(80),
                SprogId INT,
                CONSTRAINT FK_OversætterSprog FOREIGN KEY (SprogId) REFERENCES sprog(Id),
                )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE oversætter");
  }
}
