import { IUserSchema } from './user.schema.interface';

export interface IUserRepository {
    create(user: IUserSchema): Promise<IUserSchema | void>;
    update(id: string, user: IUserSchema): Promise<IUserSchema | void>;
    delete(id: string): Promise<void>;
    getById(id: string): Promise<IUserSchema | void>;
    getByUsername(username: string): Promise<IUserSchema | void>;
}
