import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateArticleStateTable1697835065554
    implements MigrationInterface
{
    private table = new Table({
        name: 'ArticleState',
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
                name: 'name',
                type: 'varchar',
                isNullable: false,
                isUnique: true,
            },
            {
                name: 'description',
                type: 'varchar',
                isNullable: false,
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
