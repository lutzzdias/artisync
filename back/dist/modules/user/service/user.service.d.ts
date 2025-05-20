import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(user: User): Promise<User>;
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>;
    getByUsername(username: string): Promise<User>;
    getByEmail(email: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    changeUsername(id: string, newUsername: string): Promise<User>;
    changePassword(id: string, newPassword: string): Promise<User>;
    refreshToken(id: string, refreshToken: string): Promise<User>;
    delete(id: string): Promise<void>;
}
