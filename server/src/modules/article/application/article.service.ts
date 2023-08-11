import { Injectable } from '@nestjs/common';

import { Article } from '../domain/entities/article.entity';
import { IArticleRepository } from '../domain/interfaces/article.repository.interface';
import { CreateArticleDto } from './dtos/create-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';

@Injectable()
export class ArticleService {
  repository: IArticleRepository;

  create(createArticleDto: CreateArticleDto) {
    // Convert from DTO to Entity
    const article = Article.fromCreateArticleDto(createArticleDto);
    // TODO: Add logic
    return this.repository.create(article);
  }

  getAll() {
    // TODO: Add logic
    return this.repository.getAll();
  }

  getById(id: string) {
    // TODO: Add logic
    return this.repository.getById(id);
  }

  // TODO: Send ID through parameter vs through DTO
  update(id: string, updateArticleDto: UpdateArticleDto) {
    const article = Article.fromUpdateArticleDto(updateArticleDto);
    // TODO: Add logic
    return this.repository.update(id, article);
  }

  delete(id: string) {
    // TODO: Add logic
    return this.repository.delete(id);
  }
}
