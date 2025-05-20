import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';
export declare class AddArticleStatusRelation1700060308855 implements MigrationInterface {
    tableColumn: TableColumn;
    foreignKey: TableForeignKey;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
