import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeormModule } from './infra/gateways/database/typeorm/typeorm.module';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeormModule, ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
