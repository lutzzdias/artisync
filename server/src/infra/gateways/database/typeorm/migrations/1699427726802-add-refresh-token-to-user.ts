import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddRefreshTokenToUser1699427726802 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add Refresh token column
        await queryRunner.addColumn(
            'User',
            new TableColumn({
                name: 'refreshToken',
                type: 'varchar',
                length: '255',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('user', 'refreshToken');
    }
}
