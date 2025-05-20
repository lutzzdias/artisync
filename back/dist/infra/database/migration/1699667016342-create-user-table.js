"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1699667016342 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1699667016342 {
    constructor() {
        this.table = new typeorm_1.Table({
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
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.CreateUserTable1699667016342 = CreateUserTable1699667016342;
//# sourceMappingURL=1699667016342-create-user-table.js.map