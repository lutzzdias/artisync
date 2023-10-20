import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateArticleDto } from '../dtos/create-article.dto';
import { UpdateArticleDto } from '../dtos/update-article.dto';
import { ArticleService } from '../service/article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    return await this.articleService.create(createArticleDto);
  }

  @Get()
  async getAll() {
    return await this.articleService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.articleService.getById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return await this.articleService.update(id, updateArticleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.articleService.delete(id);
  }
}
