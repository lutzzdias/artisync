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
    const createdArticle = await this.articleRepository.save(article);
    return createdArticle;
  }
  async update(id: string, article: Article): Promise<ArticleSchema | void> {
    // TODO: fix logic
    await this.articleRepository.update(id, article);
    return article;
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
