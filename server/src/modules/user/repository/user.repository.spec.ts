import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
    let userRepository: UserRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [Repository],
        }).compile();

        userRepository = module.get<UserRepository>(Repository);
    });

    describe('create', () => {
        it('should create a user', () => {
            expect(userRepository).toBeDefined();
        });
    });
});
