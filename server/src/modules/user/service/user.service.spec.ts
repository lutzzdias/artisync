import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: UserRepository,
                    useClass: Repository, // Mock typeorm repository
                },
            ],
        }).compile();

        userService = module.get<UserService>(UserService);
    });

    describe('create', () => {
        it('should return created user', async () => {
            const user: User = {
                username: 'username',
                email: 'email@gmail.com',
                password: 'password',
                bio: 'bio',
            };
            const spy = jest.spyOn(userService, 'create').mockResolvedValue({
                ...user,
                id: 'id',
            });

            // Act
            const result = await userService.create(user);

            // Assert
            expect(result.id).toBeTruthy();
            expect(spy).toHaveBeenCalledWith(user);
        });
    });

    describe('getAll', () => {
        it('should return list of users', async () => {
            const user: User = {
                username: 'username',
                email: 'email@gmail.com',
                password: 'password',
                bio: 'bio',
            };
            const users: User[] = [user, user, user];
            const spy = jest
                .spyOn(userService, 'getAll')
                .mockResolvedValue(users);

            // Act
            const result = await userService.getAll();

            // Assert
            expect(result).toEqual(users);
            expect(spy).toHaveBeenCalled();
        });
    });
});
