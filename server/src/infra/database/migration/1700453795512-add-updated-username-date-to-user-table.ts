import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUpdatedUsernameDateToUserTable1700453795512
    implements MigrationInterface
{
    tableColumn = new TableColumn({
        name: 'updatedUsernameAt',
        type: 'timestamp',
        isNullable: true,
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('User', this.tableColumn);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('User', this.tableColumn);
    }
}
