import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from 'src/modules/user/domain/interfaces/user.repository.interface';
import { IUserSchema } from 'src/modules/user/domain/interfaces/user.schema.interface';
import { Repository } from 'typeorm';
import { UserSchema } from '../schema/user.schema';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserSchema)
        private readonly repository: Repository<UserSchema>,
    ) {}

    async create(user: IUserSchema): Promise<void | IUserSchema> {
        const createdUser = await this.repository.save(user);
        return createdUser;
    }

    async update(id: string, user: IUserSchema): Promise<void | IUserSchema> {
        const updatedUser = await this.repository.save({
            id,
            ...user,
        });

        return updatedUser;
    }

    async delete(id: string): Promise<void> {
        // TODO: Change return type
        await this.repository.delete(id);
    }

    async getById(id: string): Promise<void | IUserSchema> {
        const options = { where: { id: id } };
        const user = await this.repository.findOne(options);
        return user;
    }
}
