import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeormModule } from './infra/gateways/database/typeorm/typeorm.module';
import { ArticleStateModule } from './modules/article-state/article-state.module';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeormModule,
    ArticleModule,
    ArticleStateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
