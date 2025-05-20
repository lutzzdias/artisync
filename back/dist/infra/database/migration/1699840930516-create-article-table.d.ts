import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateArticleTable1699840930516 implements MigrationInterface {
    private table;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
