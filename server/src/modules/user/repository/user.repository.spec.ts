import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
    let userRepository: UserRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserRepository,
                {
                    provide: getRepositoryToken(User),
                    useClass: Repository, // Mock typeorm repository
                },
            ],
        }).compile();

        userRepository = module.get<UserRepository>(UserRepository);
    });

    describe('create', () => {
        it('should return created user', async () => {
            const user: User = {
                username: 'username',
                email: 'email@gmail.com',
                password: 'password',
                bio: 'bio',
            };
            const spy = jest.spyOn(userRepository, 'create').mockResolvedValue({
                ...user,
                id: 'id',
            });

            // Act
            const result = await userRepository.create(user);

            // Assert
            expect(result.id).toBeTruthy();
            expect(spy).toHaveBeenCalledWith(user);
        });
    });

    describe('update', () => {
        it('should return updated user', async () => {
            const newBio = "I'm testing, bro";
            const user: User = {
                id: 'id',
                username: 'username',
                email: 'email@gmail.com',
                password: 'password',
                bio: 'bio',
            };
            const spy = jest.spyOn(userRepository, 'update').mockResolvedValue({
                ...user,
                bio: newBio,
            });

            // Act
            const result = await userRepository.update({
                ...user,
                bio: newBio,
            });

            // Assert
            expect(result.bio).toEqual(newBio);
            expect(spy).toHaveBeenCalledWith({ ...user, bio: newBio });
        });
    });

    describe('getById', () => {
        it('should return found user', async () => {
            // Arrange
            const id = 'id';
            const user: User = {
                id: id,
                username: 'username',
                email: 'email@gmail.com',
                password: 'password',
                bio: 'bio',
            };
            const spy = jest
                .spyOn(userRepository, 'getById')
                .mockResolvedValue(user);

            // Act
            const result = await userRepository.getById(id);

            // Assert
            expect(result).toEqual(user);
            expect(spy).toHaveBeenCalledWith(id);
        });
        it('should return null', async () => {
            // Arrange
            const id = 'id';
            const spy = jest
                .spyOn(userRepository, 'getById')
                .mockResolvedValue(null);

            // Act
            const result = await userRepository.getById(id);

            // Assert
            expect(result).toEqual(null);
            expect(spy).toHaveBeenCalledWith(id);
        });
    });

    describe('getByUsername', () => {
        it('should return found user', async () => {
            // Arrange
            const username = 'username';
            const user: User = {
                id: 'id',
                username: 'username',
                email: 'email@gmail.com',
                password: 'password',
                bio: 'bio',
            };
            const spy = jest
                .spyOn(userRepository, 'getByUsername')
                .mockResolvedValue(user);

            // Act
            const result = await userRepository.getByUsername(username);

            // Assert
            expect(result).toEqual(user);
            expect(spy).toHaveBeenCalledWith(username);
        });
        it('should return null', async () => {
            // Arrange
            const username = 'username';
            const spy = jest
                .spyOn(userRepository, 'getByUsername')
                .mockResolvedValue(null);

            // Act
            const result = await userRepository.getByUsername(username);

            // Assert
            expect(result).toEqual(null);
            expect(spy).toHaveBeenCalledWith(username);
        });
    });

    describe('getByEmail', () => {
        it('should return found user', async () => {
            // Arrange
            const email = 'email@gmail.com';
            const user: User = {
                id: 'id',
                username: 'username',
                email: 'email@gmail.com',
                password: 'password',
                bio: 'bio',
            };
            const spy = jest
                .spyOn(userRepository, 'getByEmail')
                .mockResolvedValue(user);

            // Act
            const result = await userRepository.getByEmail(email);

            // Assert
            expect(result).toEqual(user);
            expect(spy).toHaveBeenCalledWith(email);
        });
        it('should return null', async () => {
            // Arrange
            const email = 'email@gmail.com';
            const spy = jest
                .spyOn(userRepository, 'getByEmail')
                .mockResolvedValue(null);

            // Act
            const result = await userRepository.getByEmail(email);

            // Assert
            expect(result).toEqual(null);
            expect(spy).toHaveBeenCalledWith(email);
        });
    });

    describe('getAll', () => {
        it('should return list of users', async () => {
            const user: User = {
                id: 'id',
                username: 'username',
                email: 'email@gmail.com',
                password: 'password',
                bio: 'bio',
            };
            const users: User[] = [user, user, user];
            jest.spyOn(userRepository, 'getAll').mockResolvedValue(users);

            // Act
            const result = await userRepository.getAll();

            // Assert
            expect(result).toEqual(users);
        });
    });

    // TODO: Improve logic of deletion and update test
    describe('delete', () => {
        it('should return nothing', async () => {
            const id = 'id';
            const spy = jest
                .spyOn(userRepository, 'delete')
                .mockResolvedValue(undefined);

            // Act
            const result = await userRepository.delete(id);

            // Assert
            expect(result).toBeUndefined();
            expect(spy).toHaveBeenCalledWith(id);
        });
    });
});
