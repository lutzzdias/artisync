import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [ConfigModule.forRoot(), ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
