import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateStatusTable1700046265813 implements MigrationInterface {
    private table;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
