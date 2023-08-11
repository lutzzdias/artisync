import { Module } from '@nestjs/common';

import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
