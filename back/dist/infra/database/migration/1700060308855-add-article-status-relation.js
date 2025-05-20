"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddArticleStatusRelation1700060308855 = void 0;
const typeorm_1 = require("typeorm");
class AddArticleStatusRelation1700060308855 {
    constructor() {
        this.tableColumn = new typeorm_1.TableColumn({
            name: 'statusId',
            type: 'uuid',
        });
        this.foreignKey = new typeorm_1.TableForeignKey({
            columnNames: ['statusId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'Status',
            onDelete: 'CASCADE',
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn('Article', this.tableColumn);
        await queryRunner.createForeignKey('Article', this.foreignKey);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('Article', this.tableColumn);
        await queryRunner.dropForeignKey('Article', this.foreignKey);
    }
}
exports.AddArticleStatusRelation1700060308855 = AddArticleStatusRelation1700060308855;
//# sourceMappingURL=1700060308855-add-article-status-relation.js.map