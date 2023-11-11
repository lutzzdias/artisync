import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create(user: User) {
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

    async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.getById(id);
        const { ...userData } = updateUserDto;
        const updatedUser: User = {
            id: id,
            username: userData.username ?? user.username,
            email: userData.email ?? user.email,
            password: userData.password ?? user.password,
            bio: userData.bio ?? user.bio,
            refreshToken: user.refreshToken,
            createdAt: user.createdAt,
            updatedAt: new Date(),
        };
        const result = await this.userRepository.update(updatedUser);
        return result;
    }

    async delete(id: string) {
        const result = await this.userRepository.delete(id);
        return result;
    }
}
