import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/modules/article/domain/entities/article.entity';
import { IArticleRepository } from 'src/modules/article/domain/interfaces/article.repository.interface';
import { Repository } from 'typeorm';
import { ArticleSchema } from '../schema/article.schema';

// TODO: Improve logic
@Injectable()
export class ArticleRepository implements IArticleRepository {
  constructor(
    @InjectRepository(ArticleSchema)
    private readonly articleRepository: Repository<ArticleSchema>,
  ) {}

  async create(article: Article): Promise<ArticleSchema | void> {
    const createdArticle = await this.articleRepository.create(article);
    return createdArticle;
  }
  async update(id: string, article: Article): Promise<ArticleSchema | void> {
    // TODO: fix logic
    await this.articleRepository.update(id, article);
    return article;
  }
  async delete(articleId: string): Promise<void> {
    await this.articleRepository.delete(articleId);
  }
  async getById(articleId: string): Promise<ArticleSchema | void> {
    const options = { where: { id: articleId } };
    const article = await this.articleRepository.findOne(options);
    return article;
  }
  async getAll(): Promise<Array<ArticleSchema>> {
    const articles = await this.articleRepository.find();
    return articles;
  }
}
