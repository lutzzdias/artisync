import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(user: User): Promise<User> {
        await this.userRepository.save(user);
        return user;
    }

    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getById(id: string): Promise<User> {
        const options = { where: { id } };
        const user = await this.userRepository.findOne(options);
        return user;
    }

    async getByUsername(username: string): Promise<User> {
        const options = { where: { username } };
        const user = await this.userRepository.findOne(options);
        return user;
    }

    async getByEmail(email: string): Promise<User> {
        const options = { where: { email } };
        const user = await this.userRepository.findOne(options);
        return user;
    }

    async update(user: User): Promise<User> {
        await this.userRepository.update(user.id, user);
        return user;
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
