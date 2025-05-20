import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateResetPasswordTable1700435045533 implements MigrationInterface {
    private table;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
