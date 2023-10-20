import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleStateService } from '../article-state.service';
import { CreateArticleStateDto } from '../dtos/create-article-state.dto';
import { UpdateArticleStateDto } from '../dtos/update-article-state.dto';

@Controller('article-state')
export class ArticleStateController {
  constructor(private readonly articleStateService: ArticleStateService) {}

  @Post()
  create(@Body() createArticleStateDto: CreateArticleStateDto) {
    return this.articleStateService.create(createArticleStateDto);
  }

  @Get()
  findAll() {
    return this.articleStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleStateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateArticleStateDto: UpdateArticleStateDto,
  ) {
    return this.articleStateService.update(+id, updateArticleStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleStateService.remove(+id);
  }
}
