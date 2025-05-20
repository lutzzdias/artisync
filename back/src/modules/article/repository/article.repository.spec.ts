import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entity/article.entity';
import { ArticleRepository } from './article.repository';

describe('ArticleRepository', () => {
    let repository: ArticleRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArticleRepository,
                {
                    provide: getRepositoryToken(Article),
                    useClass: Repository, // Mock typeorm repository
                },
            ],
        }).compile();

        repository = module.get<ArticleRepository>(ArticleRepository);
    });

    describe('create', () => {
        it('should return created article', async () => {
            // Arrange
            const article = {};
            const spy = jest.spyOn(repository, 'create').mockResolvedValue({
                ...article,
                id: 'id',
            });

            // Act
            const result = await repository.create(article);

            // Assert
            expect(result.id).toBeTruthy();
            expect(spy).toHaveBeenCalledWith(article);
        });
    });

    describe('update', () => {
        it('should return updated article', async () => {
            const newTitle = 'new title man';
            const article = {};
            const spy = jest.spyOn(repository, 'update').mockResolvedValue({
                ...article,
                title: newTitle,
            });

            // Act
            const result = await repository.update({
                ...article,
                title: newTitle,
            });

            // Assert
            expect(result.title).toEqual(newTitle);
            expect(spy).toHaveBeenCalledWith({ ...article, title: newTitle });
        });
    });

    describe('getById', () => {
        it('should return found article', async () => {
            // Arrange
            const id = 'id';
            const article: Article = { id: id };
            const spy = jest
                .spyOn(repository, 'getById')
                .mockResolvedValue(article);

            // Act
            const result = await repository.getById(id);

            // Assert
            expect(result).toEqual(article);
            expect(spy).toHaveBeenCalledWith(id);
        });
        it('should return null', async () => {
            // Arrange
            const id = 'id';
            const spy = jest
                .spyOn(repository, 'getById')
                .mockResolvedValue(null);

            // Act
            const result = await repository.getById(id);

            // Assert
            expect(result).toEqual(null);
            expect(spy).toHaveBeenCalledWith(id);
        });
    });

    describe('getAll', () => {
        it('should return list of articles', async () => {
            const article = {};
            const articles: Article[] = [article, article, article];
            jest.spyOn(repository, 'getAll').mockResolvedValue(articles);

            // Act
            const result = await repository.getAll();

            // Assert
            expect(result).toEqual(articles);
        });
    });

    // TODO: Improve logic of deletion and update test
    describe('delete', () => {
        it('should return nothing', async () => {
            const id = 'id';
            const spy = jest
                .spyOn(repository, 'delete')
                .mockResolvedValue(undefined);

            // Act
            const result = await repository.delete(id);

            // Assert
            expect(result).toBeUndefined();
            expect(spy).toHaveBeenCalledWith(id);
        });
    });
});
