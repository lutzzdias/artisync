import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStatusTable1700046265813 implements MigrationInterface {
    private table = new Table({
        name: 'Status',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                default: 'uuid_generate_v4()',
                isPrimary: true,
                isGenerated: true,
            },
            {
                name: 'name',
                type: 'varchar',
                length: '128',
            },
            {
                name: 'description',
                type: 'varchar',
                length: '255',
                isNullable: true,
            },
            {
                name: 'color',
                type: 'char',
                length: '7',
            },
            {
                name: 'author',
                type: 'varchar',
                length: '255',
            },
            {
                name: 'userId',
                type: 'uuid',
                isNullable: true,
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
