import { ArticleState } from '../domain/entities/article.entity';

// TODO: Add nest decorators (@ApiProperty, @IsString, etc)
export class CreateArticleDto {
    title: string;
    author: string;
    description: string;
    link: string;
    state: ArticleState;
}
