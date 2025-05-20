import { Repository } from 'typeorm';
import { Status } from '../entity/status.entity';
export declare class StatusRepository {
    private readonly statusRepository;
    constructor(statusRepository: Repository<Status>);
    create(status: Status): Promise<Status>;
    getAll(): Promise<Status[]>;
    getById(id: string): Promise<Status>;
    getByUserId(userId: string): Promise<Status[]>;
    update(status: Status): Promise<Status>;
    delete(id: string): Promise<void>;
}
