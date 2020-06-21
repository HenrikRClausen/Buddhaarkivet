import { MigrationInterface, QueryRunner } from "typeorm";

export class TilføjSession1592760490314 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE session (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn VARCHAR(255),
                DagId INT,
                LærerId INT,
                OversætterId INT,
                SprogId INT,
                OversatSprogId INT,
                Starttidspunkt DATETIME,
                CONSTRAINT FK_Session_Dag FOREIGN KEY (DagId) REFERENCES dag(Id),
                CONSTRAINT FK_Session_Lærer FOREIGN KEY (LærerId) REFERENCES lærer(Id),
                CONSTRAINT FK_Session_Sprog FOREIGN KEY (SprogId) REFERENCES sprog(Id),
                CONSTRAINT FK_Session_OversatTil FOREIGN KEY (OversatSprogId) REFERENCES sprog(Id)
                )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE session");
  }
}
