import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjLærer1592740919856 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE lærer (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn varchar(80), 
                Linje varchar(80), 
                Diamantvej tinyint);`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE lærer");
  }
}
