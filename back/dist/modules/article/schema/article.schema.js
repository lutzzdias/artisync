"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../entity/article.entity");
exports.ArticleSchema = new typeorm_1.EntitySchema({
    name: 'Article',
    target: article_entity_1.Article,
    tableName: 'Article',
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid',
        },
        title: {
            type: String,
            length: 255,
        },
        description: {
            type: String,
            length: 510,
            nullable: true,
        },
        link: {
            type: String,
            length: 255,
            nullable: true,
        },
        author: {
            type: String,
            length: 255,
        },
        userId: {
            type: 'uuid',
        },
        statusId: {
            type: 'uuid',
        },
        createdAt: {
            type: Date,
            createDate: true,
        },
        updatedAt: {
            type: Date,
            updateDate: true,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            onDelete: 'CASCADE',
            nullable: false,
            joinColumn: {
                referencedColumnName: 'id',
                name: 'userId',
            },
        },
        status: {
            type: 'many-to-one',
            target: 'Status',
            onDelete: 'CASCADE',
            nullable: false,
            joinColumn: {
                referencedColumnName: 'id',
                name: 'statusId',
            },
        },
    },
});
//# sourceMappingURL=article.schema.js.map