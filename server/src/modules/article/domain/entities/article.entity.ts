import { CreateArticleDto } from '../../application/dtos/create-article.dto';
import { UpdateArticleDto } from '../../application/dtos/update-article.dto';

export class Article {
  id: string;
  title: string;
  author: string; // TODO: change string -> Author entity
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
      null, // id
      createArticleDto.title,
      createArticleDto.author,
      createArticleDto.description,
      createArticleDto.link,
      createArticleDto.state,
      null, // createdAt
      null, // updatedAt
    );
  }

  static fromUpdateArticleDto(updateArticleDto: UpdateArticleDto): Article {
    return new Article(
      updateArticleDto.id,
      updateArticleDto.title,
      updateArticleDto.author,
      updateArticleDto.description,
      updateArticleDto.link,
      updateArticleDto.state,
      null, // createdAt
      null, // updatedAt
    );
  }
}
