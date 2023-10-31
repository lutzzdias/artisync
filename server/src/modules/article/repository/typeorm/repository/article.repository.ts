import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IArticleRepository } from 'src/modules/article/domain/interfaces/article.repository.interface';
import { IArticleSchema } from 'src/modules/article/domain/interfaces/article.schema.interface';
import { Repository } from 'typeorm';
import { ArticleSchema } from '../schema/article.schema';

// TODO: Improve logic
@Injectable()
export class ArticleRepository implements IArticleRepository {
    constructor(
        @InjectRepository(ArticleSchema)
        private readonly repository: Repository<ArticleSchema>,
    ) {}

    async create(article: IArticleSchema): Promise<IArticleSchema | void> {
        const createdArticle = await this.repository.save(article);
        return createdArticle;
    }

    async update(
        id: string,
        article: IArticleSchema,
    ): Promise<IArticleSchema | void> {
        const updatedArticle = await this.repository.save({
            id,
            ...article,
        });

        return updatedArticle;
    }

    async delete(id: string): Promise<void> {
        // TODO: Change return type
        await this.repository.delete(id);
    }

    async getById(id: string): Promise<IArticleSchema | void> {
        const options = { where: { id: id } };
        const article = await this.repository.findOne(options);
        return article;
    }

    async getAll(): Promise<Array<IArticleSchema>> {
        const articles = await this.repository.find();
        return articles;
    }
}
