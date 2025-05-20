"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatusTable1700046265813 = void 0;
const typeorm_1 = require("typeorm");
class CreateStatusTable1700046265813 {
    constructor() {
        this.table = new typeorm_1.Table({
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
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.CreateStatusTable1700046265813 = CreateStatusTable1700046265813;
//# sourceMappingURL=1700046265813-create-status-table.js.map