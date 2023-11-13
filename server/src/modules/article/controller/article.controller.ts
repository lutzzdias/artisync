import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { CreateArticleDto } from '../dto/create-article.dto';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { Article } from '../entity/article.entity';
import { ArticleService } from '../service/article.service';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto) {
        const article: Article = { ...createArticleDto };
        const result = await this.articleService.create(article);
        return result;
    }

    @Get()
    async getAll() {
        const result = await this.articleService.getAll();
        return result;
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const result = await this.articleService.getById(id);
        return result;
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateArticleDto: UpdateArticleDto,
    ) {
        // TODO: Convert from UpdateArticleDto to Article
        const result = await this.articleService.update(id, updateArticleDto);
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.articleService.delete(id);
        return result;
    }
}
