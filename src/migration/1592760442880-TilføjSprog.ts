import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjSprog1592760442880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE sprog (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Dansk VARCHAR(20),
                Engelsk VARCHAR(20),
                Fransk VARCHAR(20),
                Sanskrit VARCHAR(20),
                Tibetansk VARCHAR(20),
                Tysk VARCHAR(20)
                )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE sprog");
  }
}
