import { Article } from '../entities/article.entity';
import { IArticleSchema } from './article.schema.interface';

// TODO: Create generic repository (?)
export interface IArticleRepository {
  create(article: Article): Promise<IArticleSchema | void>;
  update(id: string, article: Article): Promise<IArticleSchema | void>;
  delete(articleId: string): Promise<void>;
  getById(articleId: string): Promise<IArticleSchema | void>;
  getAll(): Promise<Array<IArticleSchema>>;
}
