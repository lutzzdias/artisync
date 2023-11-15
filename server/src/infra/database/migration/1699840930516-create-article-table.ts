import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateArticleTable1699840930516 implements MigrationInterface {
    private table = new Table({
        name: 'Article',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                default: 'uuid_generate_v4()',
                isPrimary: true,
                isGenerated: true,
            },
            {
                name: 'title',
                type: 'varchar',
                length: '255',
            },
            {
                name: 'description',
                type: 'varchar',
                length: '510',
                isNullable: true,
            },
            {
                name: 'link',
                type: 'varchar',
                length: '255',
                isNullable: true,
            },
            {
                name: 'author',
                type: 'varchar',
                length: '255',
            },
            {
                name: 'userId',
                type: 'uuid',
                isNullable: false,
            },
            {
                name: 'createdAt',
                type: 'timestamp',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updatedAt',
                type: 'timestamp',
                isNullable: false,
                default: 'now()',
            },
        ],
        foreignKeys: [
            {
                columnNames: ['userId'],
                referencedTableName: 'User',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }
}
