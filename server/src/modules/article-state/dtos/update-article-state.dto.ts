import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleStateDto } from './create-article-state.dto';

export class UpdateArticleStateDto extends PartialType(CreateArticleStateDto) {}
