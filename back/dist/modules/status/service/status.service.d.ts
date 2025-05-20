import { UserService } from 'src/modules/user/service/user.service';
import { DeleteStatusDto } from '../dto/delete-status.dto';
import { UpdateStatusDto } from '../dto/update-status.dto';
import { Status } from '../entity/status.entity';
import { StatusRepository } from '../repository/status.repository';
export declare class StatusService {
    private readonly statusRepository;
    private readonly userService;
    constructor(statusRepository: StatusRepository, userService: UserService);
    create(status: Status): Promise<Status>;
    getAll(): Promise<Status[]>;
    getByUserId(userId: string): Promise<Status[]>;
    getById(id: string): Promise<Status>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<Status>;
    delete(id: string, deleteStatusDto: DeleteStatusDto): Promise<void>;
}
