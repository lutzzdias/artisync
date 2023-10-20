import { Module } from '@nestjs/common';
import { ArticleStateController } from './controller/article-state.controller';
import { ArticleStateService } from './service/article-state.service';

@Module({
  controllers: [ArticleStateController],
  providers: [ArticleStateService],
})
export class ArticleStateModule {}
