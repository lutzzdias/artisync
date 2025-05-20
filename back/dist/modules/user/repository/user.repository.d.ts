import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
export declare class UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(user: User): Promise<User>;
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>;
    getByUsername(username: string): Promise<User>;
    getByEmail(email: string): Promise<User>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;
}
