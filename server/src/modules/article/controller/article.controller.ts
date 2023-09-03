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
import { CreateArticleDto } from '../dtos/create-article.dto';
import { UpdateArticleDto } from '../dtos/update-article.dto';

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

  // TODO: Verify URL query instead of different path (eg.: link?id=ajfdlskfjewh instead of link/ajfdlskfjewh)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.articleService.getById(id);
  }

  // TODO: Verify URL query instead of different path (eg.: link?id=ajfdlskfjewh instead of link/ajfdlskfjewh)
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
