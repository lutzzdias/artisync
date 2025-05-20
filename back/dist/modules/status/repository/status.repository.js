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
exports.StatusRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const status_entity_1 = require("../entity/status.entity");
let StatusRepository = class StatusRepository {
    constructor(statusRepository) {
        this.statusRepository = statusRepository;
    }
    async create(status) {
        const result = await this.statusRepository.save(status);
        return result;
    }
    async getAll() {
        const result = await this.statusRepository.find();
        return result;
    }
    async getById(id) {
        const options = { where: { id } };
        const result = await this.statusRepository.findOne(options);
        return result;
    }
    async getByUserId(userId) {
        const options = { where: [{ userId }, { userId: null }] };
        const result = await this.statusRepository.find(options);
        return result;
    }
    async update(status) {
        await this.statusRepository.update(status.id, status);
        return status;
    }
    async delete(id) {
        await this.statusRepository.delete(id);
    }
};
exports.StatusRepository = StatusRepository;
exports.StatusRepository = StatusRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(status_entity_1.Status)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StatusRepository);
//# sourceMappingURL=status.repository.js.map