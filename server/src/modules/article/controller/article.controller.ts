import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto) {
        return 'post';
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
        const result = await this.articleService.update(id, updateArticleDto);
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.articleService.delete(id);
        return result;
    }
}
