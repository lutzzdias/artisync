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
    private readonly articleRepository: Repository<ArticleSchema>,
  ) {}

  async create(article: IArticleSchema): Promise<ArticleSchema | void> {
    const createdArticle = await this.articleRepository.save(article);
    return createdArticle;
  }

  async update(
    id: string,
    article: IArticleSchema,
  ): Promise<ArticleSchema | void> {
    const updatedArticle = await this.articleRepository.save({
      id,
      ...article,
    });

    return updatedArticle;
  }

  async delete(id: string): Promise<void> {
    // TODO: Change return type
    await this.articleRepository.delete(id);
  }

  async getById(id: string): Promise<ArticleSchema | void> {
    const options = { where: { id: id } };
    const article = await this.articleRepository.findOne(options);
    return article;
  }

  async getAll(): Promise<Array<ArticleSchema>> {
    const articles = await this.articleRepository.find();
    return articles;
  }
}
