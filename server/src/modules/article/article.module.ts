import { Module } from '@nestjs/common';

import { ArticleService } from './application/article-service';
import { ArticleController } from './controller/article.controller';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
