import { ChangeUsernameDto } from '../dto/change-username.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from '../service/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getById(id: string): Promise<import("../entity/user.entity").User>;
    getByTextData(username: string, email: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../entity/user.entity").User>;
    changeUsername(id: string, changeUsernameDto: ChangeUsernameDto): Promise<import("../entity/user.entity").User>;
    delete(id: string): Promise<void>;
}
