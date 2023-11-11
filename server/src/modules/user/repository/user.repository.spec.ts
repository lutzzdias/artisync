import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
    let repository: UserRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [Repository],
        }).compile();

        repository = module.get<UserRepository>(Repository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
