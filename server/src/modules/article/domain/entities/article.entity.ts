import { CreateArticleDto } from '../../application/dtos/create-article.dto';
import { UpdateArticleDto } from '../../application/dtos/update-article.dto';
import { IArticleSchema } from '../interfaces/article.schema.interface';

export class Article {
  id: string;
  title: string;
  author: string;
  description: string;
  link: string;
  state: string; // TODO: change string -> Enum value
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id?: string,
    title?: string,
    author?: string,
    description?: string,
    link?: string,
    state?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.link = link;
    this.state = state;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromCreateArticleDto(createArticleDto: CreateArticleDto): Article {
    return new Article(
      undefined, // id
      createArticleDto.title,
      createArticleDto.author,
      createArticleDto.description,
      createArticleDto.link,
      createArticleDto.state,
      undefined, // createdAt
      undefined, // updatedAt
    );
  }

  update(updateArticleDto: UpdateArticleDto): Article {
    return new Article(
      this.id,
      updateArticleDto.title ?? this.title,
      updateArticleDto.author ?? this.author,
      updateArticleDto.description ?? this.description,
      updateArticleDto.link ?? this.link,
      updateArticleDto.state ?? this.state,
      this.createdAt, // createdAt
      new Date(Date.now()), // updatedAt
    );
  }

  static fromSchema(schema: IArticleSchema): Article {
    return new Article(
      schema.id,
      schema.title,
      schema.author,
      schema.description,
      schema.link,
      schema.state,
      schema.createdAt,
      schema.updatedAt,
    );
  }
}
