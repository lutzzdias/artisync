import { Inject, Injectable } from '@nestjs/common';
import { ArticleState } from '../domain/entities/article-state.entity';
import { IArticleStateRepository } from '../domain/interfaces/article-state.repository.interface';
import { CreateArticleStateDto } from '../dtos/create-article-state.dto';
import { UpdateArticleStateDto } from '../dtos/update-article-state.dto';

@Injectable()
export class ArticleStateService {
  constructor(
    @Inject('IArticleStateRepository')
    private readonly repository: IArticleStateRepository,
  ) {}

  async create(createArticleStateDto: CreateArticleStateDto) {
    // Convert from DTO to Entity
    const articleState = ArticleState.fromCreateArticleStateDto(
      createArticleStateDto,
    );

    // TODO: Add logic

    // Convert from Entity to Schema
    const articleStateSchema = ArticleState.toSchema(articleState);

    // Save to the database
    return await this.repository.create(articleStateSchema);
  }

  async getAll() {
    // TODO: Add logic
    return await this.repository.getAll();
  }

  async getById(id: string) {
    // TODO: Add logic
    return await this.repository.getById(id);
  }

  async update(id: string, updateArticleStateDto: UpdateArticleStateDto) {
    const articleStateSchema = await this.repository.getById(id);

    if (articleStateSchema) {
      // Convert from Schema to Entity
      const oldArticleState = ArticleState.fromSchema(articleStateSchema);
      // Update old entity with new values (from DTO)
      const updatedArticleState = oldArticleState.fromUpdateArticleStateDto(
        updateArticleStateDto,
      );
      // Save to the database
      return await this.repository.update(id, updatedArticleState);
    } else {
      // Return error
      return new ArticleState();
    }
  }

  async delete(id: string) {
    // TODO: Add logic
    // TODO: Add a return (success or error)
    return await this.repository.delete(id);
  }
}
