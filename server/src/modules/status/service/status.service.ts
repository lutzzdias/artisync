import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/modules/user/service/user.service';
import { UpdateStatusDto } from '../dto/update-status.dto';
import { Status } from '../entity/status.entity';
import { StatusRepository } from '../repository/status.repository';

@Injectable()
export class StatusService {
    constructor(
        private readonly statusRepository: StatusRepository,
        private readonly userService: UserService,
    ) {}

    async create(status: Status) {
        // TODO: Do not allow same name for same user
        const result = await this.statusRepository.create(status);
        return result;
    }

    async getAll() {
        const result = await this.statusRepository.getAll();
        return result;
    }

    async getByUserId(userId: string) {
        const user = await this.userService.getById(userId);
        if (!user) throw new NotFoundException('User not found');

        const result = await this.statusRepository.getByUserId(userId);
        // TODO: Check for deleted default status
        return result;
    }

    async getById(id: string) {
        const result = await this.statusRepository.getById(id);
        return result;
    }

    async update(id: string, updateStatusDto: UpdateStatusDto) {
        const status = await this.statusRepository.getById(id);
        if (!status) throw new NotFoundException('Status not found');

        // TODO: Only allow user to edit their own statuses
        // TODO: Do not allow user to edit default statuses

        const { ...updatedStatusData } = updateStatusDto;
        const updatedStatus: Status = {
            id: id,
            name: updatedStatusData.name,
            description: updatedStatusData.description,
            color: updatedStatusData.color,
            userId: updatedStatusData.userId,
            createdAt: updatedStatusData.createdAt,
            updatedAt: new Date(),
        };
        const result = await this.statusRepository.update(updatedStatus);
        return result;
    }

    async delete(id: string) {
        const status = await this.statusRepository.getById(id);
        if (!status) throw new NotFoundException('Status not found');

        // TODO: Only allow user to delete their own statuses
        // TODO: Implement default state 'deletion' logic

        const result = await this.statusRepository.delete(id);
        return result;
    }
}
