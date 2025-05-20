import {
    ConflictException,
    ForbiddenException,
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

    async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.getById(id);
        if (!user) throw new NotFoundException('User not found');

        const updatedUser: User = {
            ...user,
            bio: updateUserDto.bio ?? user.bio,
            // image: updatedUserData.image ?? user.image,
        };

        const result = await this.userRepository.update(updatedUser);
        return result;
    }

    async changeUsername(id: string, newUsername: string) {
        const user = await this.userRepository.getById(id);
        if (!user) throw new NotFoundException('User not found');

        const updateThreshold = 90 * 24 * 60 * 60 * 1000; // 90 days in ms
        const canUpdate =
            !user.updatedUsernameAt ||
            new Date().getTime() - user.updatedUsernameAt.getTime() >
                updateThreshold;

        if (!canUpdate)
            throw new ForbiddenException('Cannot update username yet');

        const usernameExists = await this.userRepository.getByUsername(
            newUsername,
        );
        if (usernameExists)
            throw new ConflictException('Username already exists');

        const updatedUser: User = {
            ...user,
            username: newUsername,
            updatedUsernameAt: new Date(),
        };

        const result = await this.userRepository.update(updatedUser);
        return result;
    }

    async changePassword(id: string, newPassword: string) {
        const user = await this.userRepository.getById(id);
        if (!user) throw new NotFoundException('User not found');

        const updatedUser: User = {
            ...user,
            password: newPassword,
        };

        const result = await this.userRepository.update(updatedUser);
        return result;
    }

    async refreshToken(id: string, refreshToken: string) {
        const user = await this.userRepository.getById(id);
        if (!user) throw new NotFoundException('User not found');

        const updatedUser: User = {
            ...user,
            refreshToken: refreshToken,
        };

        // TODO: Fix null refresh token not being saved in the db
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
