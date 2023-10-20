import { ArticleState } from '../entities/article.entity';

export interface IArticleSchema {
  id?: string;
  title: string;
  author: string;
  description: string;
  link: string;
  state: ArticleState;
  createdAt?: Date;
  updatedAt?: Date;
}
