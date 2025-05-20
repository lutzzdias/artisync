import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUserTable1699667016342 implements MigrationInterface {
    private table;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
