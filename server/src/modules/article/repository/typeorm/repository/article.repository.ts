import { Article } from 'src/modules/article/domain/entities/article.entity';
import { IArticleRepository } from 'src/modules/article/domain/interfaces/article.repository.interface';

// TODO: Implement with decided ORM or database
export class ArticleRepository implements IArticleRepository {
  create(article: Article): Promise<Article> {
    throw new Error('Method not implemented.');
  }
  update(id: string, article: Article): Promise<Article> {
    throw new Error('Method not implemented.');
  }
  delete(articleId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getById(articleId: string): Promise<Article> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Article[]> {
    throw new Error('Method not implemented.');
  }
}
