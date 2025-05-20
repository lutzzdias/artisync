"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../user/service/user.service");
const status_repository_1 = require("../repository/status.repository");
let StatusService = class StatusService {
    constructor(statusRepository, userService) {
        this.statusRepository = statusRepository;
        this.userService = userService;
    }
    async create(status) {
        const userStatuses = await this.statusRepository.getByUserId(status.userId);
        const isDuplicate = userStatuses.find((userStatus) => userStatus.name === status.name);
        if (isDuplicate)
            throw new common_1.ConflictException('Status name already exists');
        const result = await this.statusRepository.create(status);
        return result;
    }
    async getAll() {
        const result = await this.statusRepository.getAll();
        return result;
    }
    async getByUserId(userId) {
        const user = await this.userService.getById(userId);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const result = await this.statusRepository.getByUserId(userId);
        return result;
    }
    async getById(id) {
        const result = await this.statusRepository.getById(id);
        return result;
    }
    async update(id, updateStatusDto) {
        const status = await this.statusRepository.getById(id);
        if (!status)
            throw new common_1.NotFoundException('Status not found');
        console.log(status.userId, updateStatusDto.userId);
        if (!status.userId)
            new common_1.ForbiddenException('Cannot edit default status');
        if (status.userId !== updateStatusDto.userId)
            throw new common_1.ForbiddenException('You cannot edit statuses created by other users.');
        const { ...updatedStatusData } = updateStatusDto;
        const updatedStatus = {
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
    async delete(id, deleteStatusDto) {
        const status = await this.statusRepository.getById(id);
        if (!status)
            throw new common_1.NotFoundException('Status not found');
        if (status.userId != null && status.userId !== deleteStatusDto.userId)
            throw new common_1.ForbiddenException('You cannot delete statuses created by other users.');
        if (!status.userId) {
            throw new common_1.ForbiddenException('You cannot delete default statuses.');
        }
        const result = await this.statusRepository.delete(id);
        return result;
    }
};
exports.StatusService = StatusService;
exports.StatusService = StatusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [status_repository_1.StatusRepository,
        user_service_1.UserService])
], StatusService);
//# sourceMappingURL=status.service.js.map