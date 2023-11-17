import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from '../entity/status.entity';

export class StatusRepository {
    constructor(
        @InjectRepository(Status)
        private readonly statusRepository: Repository<Status>,
    ) {}

    async create(status: Status): Promise<Status> {
        const result = await this.statusRepository.save(status);
        return result;
    }

    async getAll(): Promise<Status[]> {
        const result = await this.statusRepository.find();
        return result;
    }

    async getById(id: string): Promise<Status> {
        const options = { where: { id } };
        const result = await this.statusRepository.findOne(options);
        return result;
    }

    async getByUserId(userId: string): Promise<Status[]> {
        const options = { where: { userId } };
        const result = await this.statusRepository.find(options);
        return result;
    }

    async update(status: Status): Promise<Status> {
        // TODO: Stop using save and use update instead
        const result = await this.statusRepository.save(status);
        return result;
    }

    async delete(id: string): Promise<void> {
        await this.statusRepository.delete(id);
    }
}
