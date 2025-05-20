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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repository/user.repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(user) {
        const usernameExists = await this.userRepository.getByUsername(user.username);
        if (usernameExists)
            throw new common_1.ConflictException('Username already exists');
        const emailExists = await this.userRepository.getByEmail(user.email);
        if (emailExists)
            throw new common_1.ConflictException('Email already exists');
        const result = await this.userRepository.create(user);
        return result;
    }
    async getAll() {
        const result = await this.userRepository.getAll();
        return result;
    }
    async getById(id) {
        const result = await this.userRepository.getById(id);
        return result;
    }
    async getByUsername(username) {
        const result = await this.userRepository.getByUsername(username);
        return result;
    }
    async getByEmail(email) {
        const result = await this.userRepository.getByEmail(email);
        return result;
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.getById(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const updatedUser = {
            ...user,
            bio: updateUserDto.bio ?? user.bio,
        };
        const result = await this.userRepository.update(updatedUser);
        return result;
    }
    async changeUsername(id, newUsername) {
        const user = await this.userRepository.getById(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const updateThreshold = 90 * 24 * 60 * 60 * 1000;
        const canUpdate = !user.updatedUsernameAt ||
            new Date().getTime() - user.updatedUsernameAt.getTime() >
                updateThreshold;
        if (!canUpdate)
            throw new common_1.ForbiddenException('Cannot update username yet');
        const usernameExists = await this.userRepository.getByUsername(newUsername);
        if (usernameExists)
            throw new common_1.ConflictException('Username already exists');
        const updatedUser = {
            ...user,
            username: newUsername,
            updatedUsernameAt: new Date(),
        };
        const result = await this.userRepository.update(updatedUser);
        return result;
    }
    async changePassword(id, newPassword) {
        const user = await this.userRepository.getById(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const updatedUser = {
            ...user,
            password: newPassword,
        };
        const result = await this.userRepository.update(updatedUser);
        return result;
    }
    async refreshToken(id, refreshToken) {
        const user = await this.userRepository.getById(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const updatedUser = {
            ...user,
            refreshToken: refreshToken,
        };
        const result = await this.userRepository.update(updatedUser);
        return result;
    }
    async delete(id) {
        const user = await this.userRepository.getById(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const result = await this.userRepository.delete(id);
        return result;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map