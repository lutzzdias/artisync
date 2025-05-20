import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';
export declare class ArticleRepository {
    private readonly articleRepository;
    constructor(articleRepository: Repository<Article>);
    create(article: Article): Promise<Article>;
    getAll(): Promise<Article[]>;
    getById(id: string): Promise<Article>;
    getByUserId(userId: string): Promise<Article[]>;
    update(article: Article): Promise<Article>;
    delete(id: string): Promise<void>;
}
