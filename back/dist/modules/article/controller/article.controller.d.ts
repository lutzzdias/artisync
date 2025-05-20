import { CreateArticleDto } from '../dto/create-article.dto';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { Article } from '../entity/article.entity';
import { ArticleService } from '../service/article.service';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(createArticleDto: CreateArticleDto): Promise<Article>;
    getAll(): Promise<Article[]>;
    getById(id: string): Promise<Article>;
    getByUserId(userId: string): Promise<Article[]>;
    update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article>;
    delete(id: string): Promise<void>;
}
