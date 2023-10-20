import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticleController } from './controller/article.controller';
import { ArticleSchema } from './repository/typeorm/schema/article.schema';
import { ArticleService } from './service/article.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleSchema])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
