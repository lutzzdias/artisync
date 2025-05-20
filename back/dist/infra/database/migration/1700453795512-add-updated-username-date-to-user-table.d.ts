import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddUpdatedUsernameDateToUserTable1700453795512 implements MigrationInterface {
    tableColumn: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
