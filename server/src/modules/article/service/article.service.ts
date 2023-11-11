import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { Article } from '../entity/article.entity';
import { ArticleRepository } from '../repository/article.repository';

@Injectable()
export class ArticleService {
    constructor(private readonly articleRepository: ArticleRepository) {}

    async create(article: Article) {
        const result = await this.articleRepository.create(article);
        return result;
    }

    async getAll() {
        const result = await this.articleRepository.getAll();
        return result;
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
