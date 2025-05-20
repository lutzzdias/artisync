import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1699667016342 implements MigrationInterface {
    private table = new Table({
        name: 'User',
        uniques: [
            {
                name: 'UNIQUE_USERNAME',
                columnNames: ['username'],
            },
            {
                name: 'UNIQUE_EMAIL',
                columnNames: ['email'],
            },
        ],
        columns: [
            {
                name: 'id',
                type: 'uuid',
                default: 'uuid_generate_v4()',
                isPrimary: true,
                isGenerated: true,
            },
            {
                name: 'username',
                type: 'varchar',
                length: '255',
                isUnique: true,
            },
            {
                name: 'email',
                type: 'varchar',
                length: '255',
                isUnique: true,
            },
            {
                name: 'password',
                type: 'varchar',
                length: '255',
            },
            {
                name: 'bio',
                type: 'text',
                isNullable: true,
            },
            {
                name: 'image',
                type: 'varchar',
                length: '255',
                isNullable: true,
            },
            {
                name: 'refreshToken',
                type: 'varchar',
                length: '510',
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
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }
}
