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
        const options = { where: [{ userId }, { userId: null }] };
        const result = await this.statusRepository.find(options);
        return result;
    }

    async update(status: Status): Promise<Status> {
        await this.statusRepository.update(status.id, status);
        return status;
    }

    async delete(id: string): Promise<void> {
        await this.statusRepository.delete(id);
    }
}
