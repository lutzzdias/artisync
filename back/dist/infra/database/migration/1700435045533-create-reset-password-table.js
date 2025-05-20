"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResetPasswordTable1700435045533 = void 0;
const typeorm_1 = require("typeorm");
class CreateResetPasswordTable1700435045533 {
    constructor() {
        this.table = new typeorm_1.Table({
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
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.CreateResetPasswordTable1700435045533 = CreateResetPasswordTable1700435045533;
//# sourceMappingURL=1700435045533-create-reset-password-table.js.map