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
        createdAt: {
            type: Date,
            createDate: true,
        },
        updatedAt: {
            type: Date,
            updateDate: true,
        },
    },
});
