import { Test, TestingModule } from '@nestjs/testing';
import { ArticleStateService } from '../article-state.service';
import { ArticleStateController } from './article-state.controller';

describe('ArticleStateController', () => {
  let controller: ArticleStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleStateController],
      providers: [ArticleStateService],
    }).compile();

    controller = module.get<ArticleStateController>(ArticleStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
