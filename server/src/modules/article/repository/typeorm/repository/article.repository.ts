import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/modules/article/domain/entities/article.entity';
import { IArticleRepository } from 'src/modules/article/domain/interfaces/article.repository.interface';
import { Repository } from 'typeorm';
import { ArticleSchema } from '../schema/article.schema';

// TODO: Implement with decided ORM or database
export class ArticleRepository implements IArticleRepository {
  constructor(
    @InjectRepository(ArticleSchema)
    private readonly articleRepository: Repository<ArticleSchema>,
  ) {}

  async create(article: Article): Promise<ArticleSchema | void> {
    throw new Error('Method not implemented.');
  }
  async update(id: string, article: Article): Promise<ArticleSchema | void> {
    throw new Error('Method not implemented.');
  }
  async delete(articleId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async getById(articleId: string): Promise<ArticleSchema | void> {
    const options = { where: { id: articleId } };
    const articleSchema = await this.articleRepository.findOne(options);
    return articleSchema;
  }
  async getAll(): Promise<Array<ArticleSchema>> {
    throw new Error('Method not implemented.');
  }
}
