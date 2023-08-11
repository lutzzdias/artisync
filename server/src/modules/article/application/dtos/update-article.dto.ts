import { PartialType } from '@nestjs/mapped-types';

import { CreateArticleDto } from './create-article.dto';

// TODO: Add nest decorators (@ApiProperty, @IsString, etc)
export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  id: string;
}
