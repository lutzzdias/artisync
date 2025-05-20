import { UserService } from 'src/modules/user/service/user.service';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { Article } from '../entity/article.entity';
import { ArticleRepository } from '../repository/article.repository';
export declare class ArticleService {
    private readonly articleRepository;
    private readonly userService;
    constructor(articleRepository: ArticleRepository, userService: UserService);
    create(article: Article): Promise<Article>;
    getAll(): Promise<Article[]>;
    getByUserId(userId: string): Promise<Article[]>;
    getById(id: string): Promise<Article>;
    update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article>;
    delete(id: string): Promise<void>;
}
