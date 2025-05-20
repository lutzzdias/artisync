import { CreateStatusDto } from '../dto/create-status.dto';
import { DeleteStatusDto } from '../dto/delete-status.dto';
import { UpdateStatusDto } from '../dto/update-status.dto';
import { Status } from '../entity/status.entity';
import { StatusService } from '../service/status.service';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    create(createStatusDto: CreateStatusDto): Promise<Status>;
    getAll(userId: string): Promise<any>;
    getById(id: string): Promise<Status>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<Status>;
    delete(id: string, deleteStatusDto: DeleteStatusDto): Promise<void>;
}
