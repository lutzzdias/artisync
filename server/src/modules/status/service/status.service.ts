import {
    ConflictException,
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { UserService } from 'src/modules/user/service/user.service';
import { DeleteStatusDto } from '../dto/delete-status.dto';
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
        const userStatuses = await this.statusRepository.getByUserId(
            status.userId,
        );
        const isDuplicate = userStatuses.find(
            (userStatus) => userStatus.name === status.name,
        );
        if (isDuplicate)
            throw new ConflictException('Status name already exists');

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
        console.log(status.userId, updateStatusDto.userId);
        if (!status.userId)
            new ForbiddenException('Cannot edit default status');
        if (status.userId !== updateStatusDto.userId)
            throw new ForbiddenException(
                'You cannot edit statuses created by other users.',
            );

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

    async delete(id: string, deleteStatusDto: DeleteStatusDto) {
        const status = await this.statusRepository.getById(id);
        if (!status) throw new NotFoundException('Status not found');

        if (status.userId != null && status.userId !== deleteStatusDto.userId)
            throw new ForbiddenException(
                'You cannot delete statuses created by other users.',
            );

        if (!status.userId) {
            // TODO: Implement default status deletion logic
            throw new ForbiddenException('You cannot delete default statuses.');
        }
        const result = await this.statusRepository.delete(id);
        return result;
    }
}
