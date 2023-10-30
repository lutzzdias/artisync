import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeormModule } from './infra/gateways/database/typeorm/typeorm.module';
import { ArticleStateModule } from './modules/article-state/article-state.module';
import { ArticleModule } from './modules/article/article.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeormModule,
        ArticleModule,
        ArticleStateModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
