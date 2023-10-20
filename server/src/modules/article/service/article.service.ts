import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Article } from '../domain/entities/article.entity';
import { IArticleRepository } from '../domain/interfaces/article.repository.interface';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { UpdateArticleDto } from '../dtos/update-article.dto';
import { ArticleRepository } from '../repository/typeorm/repository/article.repository';
import { ArticleSchema } from '../repository/typeorm/schema/article.schema';

@Injectable()
export class ArticleService {
  private repository: IArticleRepository;
  constructor(
    @InjectRepository(ArticleSchema)
    private readonly typeormRepository: Repository<ArticleSchema>,
  ) {
    this.repository = new ArticleRepository(typeormRepository);
  }

  async create(createArticleDto: CreateArticleDto) {
    // Convert from DTO to Entity
    const article = Article.fromCreateArticleDto(createArticleDto);
    // TODO: Add logic
    // Convert Entity to Schema
    const articleSchema = Article.toSchema(article);
    return await this.repository.create(articleSchema);
  }

  async getAll() {
    // TODO: Add logic
    return await this.repository.getAll();
  }

  async getById(id: string) {
    // TODO: Add logic
    return await this.repository.getById(id);
  }

  // TODO: Send ID through parameter vs through DTO
  // TODO: Add logic (if necessary)
  // TODO: Add validation (probably inside the entity itself)
  // TODO: Throw error if article was not found
  async update(id: string, updateArticleDto: UpdateArticleDto) {
    const articleSchema = await this.repository.getById(id);
    if (articleSchema) {
      // Convert schema to entity
      const oldArticle = Article.fromSchema(articleSchema);
      // Update old entity with received values
      const updatedArticle = oldArticle.fromUpdateArticleDto(updateArticleDto);
      // Save to the database
      return await this.repository.update(id, updatedArticle);
    } else {
      // Return error
      return new Article();
    }
  }

  async delete(id: string) {
    // TODO: Add logic
    // TODO: Add a return (success or error)
    return await this.repository.delete(id);
  }
}
