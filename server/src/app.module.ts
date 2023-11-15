import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeormModule } from './infra/database/typeorm.module';
import { ArticleModule } from './modules/article/article.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { StatusModule } from './modules/status/status.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeormModule,
        AuthModule,
        UserModule,
        ArticleModule,
        StatusModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
