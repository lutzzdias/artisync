"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArticleTable1699840930516 = void 0;
const typeorm_1 = require("typeorm");
class CreateArticleTable1699840930516 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'Article',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    default: 'uuid_generate_v4()',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'description',
                    type: 'varchar',
                    length: '510',
                    isNullable: true,
                },
                {
                    name: 'link',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'author',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'userId',
                    type: 'uuid',
                    isNullable: false,
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
exports.CreateArticleTable1699840930516 = CreateArticleTable1699840930516;
//# sourceMappingURL=1699840930516-create-article-table.js.map