import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleStateController } from './controller/article-state.controller';
import { ArticleStateRepository } from './repository/typeorm/repository/article-state.repository';
import { ArticleStateSchema } from './repository/typeorm/schema/article-state.schema';
import { ArticleStateService } from './service/article-state.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleStateSchema])],
  controllers: [ArticleStateController],
  providers: [
    ArticleStateService,
    { provide: 'IArticleStateRepository', useClass: ArticleStateRepository },
  ],
})
export class ArticleStateModule {}
