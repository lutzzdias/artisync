import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateResetPasswordTable1700435045533
    implements MigrationInterface
{
    private table = new Table({
        name: 'ResetPassword',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                default: 'uuid_generate_v4()',
                isPrimary: true,
                isGenerated: true,
            },
            {
                name: 'userId',
                type: 'uuid',
            },
            {
                name: 'token',
                type: 'varchar',
                length: '255',
            },
            {
                name: 'used',
                type: 'boolean',
                default: false,
            },
            {
                name: 'expiresAt',
                type: 'timestamp',
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
