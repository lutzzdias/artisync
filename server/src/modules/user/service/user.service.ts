import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create(user: User) {
        const usernameExists = await this.userRepository.getByUsername(
            user.username,
        );
        if (usernameExists)
            throw new ConflictException('Username already exists');

        const emailExists = await this.userRepository.getByEmail(user.email);
        if (emailExists) throw new ConflictException('Email already exists');

        const result = await this.userRepository.create(user);
        return result;
    }

    async getAll() {
        const result = await this.userRepository.getAll();
        return result;
    }

    async getById(id: string) {
        const result = await this.userRepository.getById(id);
        return result;
    }

    async getByUsername(username: string) {
        const result = await this.userRepository.getByUsername(username);
        return result;
    }

    async getByEmail(email: string) {
        const result = await this.userRepository.getByEmail(email);
        return result;
    }

    // TODO: Check if it's ok to refresh token through here
    // TODO: Implement username and email update restrictions
    async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.getById(id);
        if (!user) throw new NotFoundException('User not found');

        const { ...updatedUserData } = updateUserDto;
        const updatedUser: User = {
            id: id,
            username: updatedUserData.username ?? user.username,
            email: updatedUserData.email ?? user.email,
            password: updatedUserData.password ?? user.password,
            bio: updatedUserData.bio ?? user.bio,
            refreshToken: updatedUserData.refreshToken ?? user.refreshToken,
            createdAt: user.createdAt,
            updatedAt: new Date(),
        };
        const result = await this.userRepository.update(updatedUser);
        return result;
    }

    async delete(id: string) {
        // check if user exists
        const user = await this.userRepository.getById(id);
        if (!user) throw new NotFoundException('User not found');

        const result = await this.userRepository.delete(id);
        return result;
    }
}
