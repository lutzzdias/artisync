import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { ArticleController } from './controller/article.controller';
import { ArticleRepository } from './repository/article.repository';
import { ArticleSchema } from './schema/article.schema';
import { ArticleService } from './service/article.service';

@Module({
    imports: [TypeOrmModule.forFeature([ArticleSchema]), UserModule],
    controllers: [ArticleController],
    providers: [ArticleService, ArticleRepository],
})
export class ArticleModule {}
