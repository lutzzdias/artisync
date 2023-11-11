import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';
import { ArticleRepository } from '../repository/article.repository';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
    let service: ArticleService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArticleService,
                {
                    provide: ArticleRepository,
                    useClass: Repository, // Mock typeorm repository
                },
            ],
        }).compile();

        service = module.get<ArticleService>(ArticleService);
    });

    describe('create', () => {
        it('should return created article', async () => {
            const article: Article = {};
            const spy = jest.spyOn(service, 'create').mockResolvedValue({
                ...article,
                id: 'id',
            });

            // Act
            const result = await service.create(article);

            // Assert
            expect(result.id).toBeTruthy();
            expect(spy).toHaveBeenCalledWith(article);
        });
    });

    describe('getAll', () => {
        it('should return list of articles', async () => {
            const article: Article = {};
            const articles: Article[] = [article, article, article];
            const spy = jest
                .spyOn(service, 'getAll')
                .mockResolvedValue(articles);

            // Act
            const result = await service.getAll();

            // Assert
            expect(result).toEqual(articles);
            expect(spy).toHaveBeenCalled();
        });
    });
});
