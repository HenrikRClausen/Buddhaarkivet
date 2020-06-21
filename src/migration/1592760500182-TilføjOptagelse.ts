import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjOptagelse1592760500182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE optagelse (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                SessionId INT,
                ErVideo TINYINT,
                Længde INT,
                Format VARCHAR(40),
                Bitrate INT,
                Højde INT,
                Bredde INT,
                CONSTRAINT FK_Optagelse_Session FOREIGN KEY (SessionId) REFERENCES session(Id)
                )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE optagelse");
  }
}
