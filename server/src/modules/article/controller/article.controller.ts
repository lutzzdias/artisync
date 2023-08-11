import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ArticleService } from '../application/article.service';
import { CreateArticleDto } from '../application/dtos/create-article.dto';
import { UpdateArticleDto } from '../application/dtos/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  getAll() {
    return this.articleService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.articleService.getById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(id, updateArticleDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
}
