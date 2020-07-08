import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjSted1592740924509 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE sted (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn varchar(80), 
                Lokation varchar(80), 
                Land varchar(80)
                )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE sted");
  }
}
