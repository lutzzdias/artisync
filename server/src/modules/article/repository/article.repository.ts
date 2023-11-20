import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';

@Injectable()
export class ArticleRepository {
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>,
    ) {}

    async create(article: Article): Promise<Article> {
        const result = await this.articleRepository.create(article);
        return result;
    }

    async getAll(): Promise<Article[]> {
        const result = await this.articleRepository.find();
        return result;
    }

    async getById(id: string): Promise<Article> {
        const options = { where: { id } };
        const result = await this.articleRepository.findOne(options);
        return result;
    }

    async getByUserId(userId: string): Promise<Article[]> {
        const options = { where: { userId } };
        const result = await this.articleRepository.find(options);
        return result;
    }

    async update(article: Article): Promise<Article> {
        const result = (
            await this.articleRepository.update(article.id, article)
        ).raw[0];

        return result;
    }

    async delete(id: string): Promise<void> {
        await this.articleRepository.delete(id);
    }
}
