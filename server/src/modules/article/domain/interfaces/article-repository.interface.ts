import { Article } from '../entities/article.entity';

// TODO: Create generic repository (?)
export interface IArticleRepository {
  create(article: Article): Promise<Article>;
  update(id: string, article: Article): Promise<Article>;
  delete(articleId: string): Promise<void>;
  getById(articleId: string): Promise<Article>;
  getAll(): Promise<Array<Article>>;
}
