import { Injectable } from '@nestjs/common';

import { IArticleRepository } from '../domain/interfaces/article.repository.interface';
import { CreateArticleDto } from './dtos/create-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';

@Injectable()
export class ArticleService {
  repository: IArticleRepository;

  create(createArticleDto: CreateArticleDto) {
    // TODO: Add logic
    return this.repository.create(createArticleDto);
  }

  getAll() {
    // TODO: Add logic
    return this.repository.getAll();
  }

  getById(id: string) {
    // TODO: Add logic
    return this.repository.getById(id);
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    // TODO: Add logic
    return this.repository.update(id, updateArticleDto);
  }

  delete(id: string) {
    // TODO: Add logic
    return this.repository.delete(id);
  }
}
