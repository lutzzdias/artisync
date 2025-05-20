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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reset_password_entity_1 = require("../entity/reset-password.entity");
let AuthRepository = class AuthRepository {
    constructor(passwordResetRepository) {
        this.passwordResetRepository = passwordResetRepository;
    }
    async create(passwordReset) {
        const result = await this.passwordResetRepository.save(passwordReset);
        return result;
    }
    async getAll() {
        const result = await this.passwordResetRepository.find();
        return result;
    }
    async getById(id) {
        const options = { where: { id } };
        const result = await this.passwordResetRepository.findOne(options);
        return result;
    }
    async getByToken(token) {
        const options = { where: { token } };
        const result = await this.passwordResetRepository.findOne(options);
        return result;
    }
    async getByUserId(userId) {
        const options = { where: { userId } };
        const result = await this.passwordResetRepository.find(options);
        return result;
    }
    async invalidate(instance) {
        await this.passwordResetRepository.update(instance.id, instance);
        return instance;
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reset_password_entity_1.ResetPassword)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthRepository);
//# sourceMappingURL=auth.repository.js.map