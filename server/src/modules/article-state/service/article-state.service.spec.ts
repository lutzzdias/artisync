import { Test, TestingModule } from '@nestjs/testing';
import { ArticleStateService } from './article-state.service';

describe('ArticleStateService', () => {
  let service: ArticleStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleStateService],
    }).compile();

    service = module.get<ArticleStateService>(ArticleStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
