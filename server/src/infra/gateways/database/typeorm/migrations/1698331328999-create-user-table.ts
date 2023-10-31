import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1698331328999 implements MigrationInterface {
    private table = new Table({
        name: 'User',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                isNullable: false,
                isUnique: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
            },
            {
                name: 'email',
                type: 'varchar',
                isNullable: false,
                isUnique: true,
            },
            {
                name: 'username',
                type: 'varchar',
                isNullable: false,
                isUnique: true,
            },
            {
                // TODO: make it safe eg. hash it
                name: 'password',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'bio',
                type: 'varchar',
                length: '510',
                isNullable: true,
            },
            {
                name: 'lastLogin',
                type: 'timestamp',
                isNullable: true,
            },
            {
                name: 'deletedDefaultStates',
                type: 'text',
                isArray: true,
                isNullable: true,
            },
            {
                name: 'createdAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
            },
            {
                name: 'updatedAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
                onUpdate: 'CURRENT_TIMESTAMP',
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
