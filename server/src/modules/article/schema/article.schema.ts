import { EntitySchema } from 'typeorm';
import { Article } from '../entity/article.entity';

export const ArticleSchema = new EntitySchema<Article>({
    name: 'Article',
    target: Article,
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
