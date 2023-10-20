import { Injectable } from '@nestjs/common';
import { CreateArticleStateDto } from './dtos/create-article-state.dto';
import { UpdateArticleStateDto } from './dtos/update-article-state.dto';

@Injectable()
export class ArticleStateService {
  create(createArticleStateDto: CreateArticleStateDto) {
    return 'This action adds a new articleState';
  }

  findAll() {
    return `This action returns all articleState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleState`;
  }

  update(id: number, updateArticleStateDto: UpdateArticleStateDto) {
    return `This action updates a #${id} articleState`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleState`;
  }
}
