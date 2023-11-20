import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from 'src/common/common.module';
import { TypeormModule } from 'src/infra/database/typeorm.module';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { StatusModule } from './status/status.module';
import { UserModule } from './user/user.module';

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
