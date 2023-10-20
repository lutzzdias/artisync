import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateArticleStateDto } from '../dtos/create-article-state.dto';
import { UpdateArticleStateDto } from '../dtos/update-article-state.dto';
import { ArticleStateService } from '../service/article-state.service';

@Controller('article-state')
export class ArticleStateController {
  constructor(private readonly articleStateService: ArticleStateService) {}

  @Post()
  async create(@Body() createArticleStateDto: CreateArticleStateDto) {
    return await this.articleStateService.create(createArticleStateDto);
  }

  @Get()
  async getAll() {
    return await this.articleStateService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.articleStateService.getById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleStateDto: UpdateArticleStateDto,
  ) {
    return await this.articleStateService.update(id, updateArticleStateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.articleStateService.delete(id);
  }
}
