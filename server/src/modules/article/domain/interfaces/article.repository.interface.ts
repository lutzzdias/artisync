import { IArticleSchema } from './article.schema.interface';

// TODO: Create generic repository (?)
export interface IArticleRepository {
    create(article: IArticleSchema): Promise<IArticleSchema | void>;
    update(id: string, article: IArticleSchema): Promise<IArticleSchema | void>;
    delete(id: string): Promise<void>;
    getById(id: string): Promise<IArticleSchema | void>;
    getAll(): Promise<Array<IArticleSchema>>;
}
