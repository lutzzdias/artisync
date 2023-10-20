import { CreateArticleStateDto } from '../../dtos/create-article-state.dto';
import { UpdateArticleStateDto } from '../../dtos/update-article-state.dto';
import { IArticleStateSchema } from '../interfaces/article-state.schema.interface';

export class ArticleState {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id?: string,
    name?: string,
    description?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromCreateArticleStateDto(
    createArticleStateDto: CreateArticleStateDto,
  ): ArticleState {
    return new ArticleState(
      undefined, // id
      createArticleStateDto.name,
      createArticleStateDto.description,
      undefined, // createdAt
      undefined, // updatedAt
    );
  }

  fromUpdateArticleStateDto(
    updateArticleStateDto: UpdateArticleStateDto,
  ): ArticleState {
    return new ArticleState(
      this.id, // id
      updateArticleStateDto.name ?? this.name,
      updateArticleStateDto.description ?? this.description,
      this.createdAt, // createdAt
      new Date(Date.now()), // updatedAt
    );
  }

  static fromSchema(schema: IArticleStateSchema): ArticleState {
    return new ArticleState(
      schema.id,
      schema.name,
      schema.description,
      schema.createdAt,
      schema.updatedAt,
    );
  }

  static toSchema(articleState: ArticleState): IArticleStateSchema {
    return {
      id: articleState.id,
      name: articleState.name,
      description: articleState.description,
      createdAt: articleState.createdAt,
      updatedAt: articleState.updatedAt,
    };
  }
}
