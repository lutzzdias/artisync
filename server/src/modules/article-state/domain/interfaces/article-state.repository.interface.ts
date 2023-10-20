import { IArticleStateSchema } from './article-state.schema.interface';

export interface IArticleStateRepository {
  create(
    articleState: IArticleStateSchema,
  ): Promise<IArticleStateSchema | void>;
  update(
    id: string,
    articleState: IArticleStateSchema,
  ): Promise<IArticleStateSchema | void>;
  delete(articleStateId: string): Promise<void>;
  getById(articleStateId: string): Promise<IArticleStateSchema | void>;
  getAll(): Promise<Array<IArticleStateSchema>>;
}
