import { PartialType } from '@nestjs/mapped-types';

import { CreateArticleDto } from './create-article.dto';

// TODO: Add properties (and methods (?))
export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
