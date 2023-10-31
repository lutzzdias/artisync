import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IArticleStateRepository } from 'src/modules/article-state/domain/interfaces/article-state.repository.interface';
import { IArticleStateSchema } from 'src/modules/article-state/domain/interfaces/article-state.schema.interface';
import { Repository } from 'typeorm';
import { ArticleStateSchema } from '../schema/article-state.schema';

@Injectable()
export class ArticleStateRepository implements IArticleStateRepository {
    constructor(
        @InjectRepository(ArticleStateSchema)
        private readonly articleStateRepository: Repository<ArticleStateSchema>,
    ) {}

    async create(
        articleState: IArticleStateSchema,
    ): Promise<void | IArticleStateSchema> {
        const createdArticleState = await this.articleStateRepository.save(
            articleState,
        );
        return createdArticleState;
    }

    async update(
        id: string,
        articleState: IArticleStateSchema,
    ): Promise<void | IArticleStateSchema> {
        const updatedArticleState = await this.articleStateRepository.save({
            id,
            ...articleState,
        });

        return updatedArticleState;
    }

    async delete(articleStateId: string): Promise<void> {
        await this.articleStateRepository.delete(articleStateId);
    }

    async getById(articleStateId: string): Promise<void | IArticleStateSchema> {
        const options = { where: { id: articleStateId } };

        const articleState = await this.articleStateRepository.findOne(options);

        return articleState;
    }

    async getAll(): Promise<IArticleStateSchema[]> {
        const articleStates = await this.articleStateRepository.find();
        return articleStates;
    }
}
