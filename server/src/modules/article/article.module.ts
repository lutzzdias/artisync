import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticleService } from './application/article.service';
import { ArticleController } from './controller/article.controller';
import { ArticleSchema } from './repository/typeorm/schema/article.schema';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleSchema])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
