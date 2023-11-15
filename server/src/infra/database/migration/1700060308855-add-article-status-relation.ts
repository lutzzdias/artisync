import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class AddArticleStatusRelation1700060308855
    implements MigrationInterface
{
    tableColumn = new TableColumn({
        name: 'statusId',
        type: 'uuid',
    });

    foreignKey = new TableForeignKey({
        columnNames: ['statusId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'Status',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('Article', this.tableColumn);
        await queryRunner.createForeignKey('Article', this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('Article', this.tableColumn);
        await queryRunner.dropForeignKey('Article', this.foreignKey);
    }
}
