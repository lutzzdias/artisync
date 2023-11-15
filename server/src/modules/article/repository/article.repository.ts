import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';

export type GetArticleOptions = {
    id?: string;
    userId?: string;
};

@Injectable()
export class ArticleRepository {
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>,
    ) {}

    async create(article: Article): Promise<Article> {
        await this.articleRepository.save(article);
        return article;
    }

    async getAll(options?: GetArticleOptions): Promise<Article[]> {
        const opt = { where: { ...options } };
        return await this.articleRepository.find(opt);
    }

    async getById(id: string): Promise<Article> {
        const options = { where: { id } };
        const article = await this.articleRepository.findOne(options);
        return article;
    }

    async update(article: Article): Promise<Article> {
        // TODO: Stop using save and use update instead
        article = await this.articleRepository.save(article);
        return article;
    }

    async delete(id: string): Promise<void> {
        await this.articleRepository.delete(id);
    }
}
