import {MigrationInterface, QueryRunner} from "typeorm";

export class TilføjBegivenhed1592740929050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE begivenhed (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn varchar(80), 
                StedId INT, 
                StartDato DATETIME, 
                SlutDato DATETIME,
                CONSTRAINT FK_Begivenhed_Sted FOREIGN KEY (StedId) REFERENCES sted(Id)
                )`
            );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DROP TABLE begivenhed"
        );
    }
}
