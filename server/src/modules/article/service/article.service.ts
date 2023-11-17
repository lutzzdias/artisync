import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/modules/user/service/user.service';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { Article } from '../entity/article.entity';
import { ArticleRepository } from '../repository/article.repository';

@Injectable()
export class ArticleService {
    constructor(
        private readonly articleRepository: ArticleRepository,
        private readonly userService: UserService,
    ) {}

    async create(article: Article) {
        const result = await this.articleRepository.create(article);
        return result;
    }

    async getAll() {
        const result = await this.articleRepository.getAll();
        return result;
    }

    async getByUserId(userId: string): Promise<Article[]> {
        const user = await this.userService.getById(userId);
        if (!user) throw new NotFoundException('User not found');

        const articles = await this.articleRepository.getByUserId(userId);

        return articles;
    }

    async getById(id: string) {
        const result = await this.articleRepository.getById(id);
        return result;
    }

    async update(id: string, updateArticleDto: UpdateArticleDto) {
        const article = await this.articleRepository.getById(id);
        if (!article) throw new NotFoundException('Article not found');

        const { ...updatedArticleData } = updateArticleDto;
        const updatedArticle: Article = {
            id: id,
            title: updatedArticleData.title ?? article.title,
            description: updatedArticleData.description ?? article.description,
            link: updatedArticleData.link ?? article.link,
            author: updatedArticleData.author ?? article.author,
            userId: article.userId,
            statusId: updateArticleDto.statusId ?? article.statusId,
            createdAt: article.createdAt,
            updatedAt: new Date(),
        };

        const result = await this.articleRepository.update(updatedArticle);
        return result;
    }

    async delete(id: string) {
        // check if article exists
        const article = await this.articleRepository.getById(id);
        if (!article) throw new NotFoundException('Article not found');

        const result = await this.articleRepository.delete(id);
        return result;
    }
}
