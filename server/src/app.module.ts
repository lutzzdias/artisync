import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CommonModule } from './common/common.module';
import { TypeormModule } from './infra/database/typeorm.module';
import { ArticleModule } from './modules/article/article.module';
import { AuthModule } from './modules/auth/auth.module';
import { StatusModule } from './modules/status/status.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeormModule,
        AuthModule,
        UserModule,
        ArticleModule,
        StatusModule,
        CommonModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
