import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResetPassword } from '../entity/reset-password.entity';

@Injectable()
export class AuthRepository {
    constructor(
        @InjectRepository(ResetPassword)
        private readonly passwordResetRepository: Repository<ResetPassword>,
    ) {}

    async create(passwordReset: ResetPassword): Promise<ResetPassword> {
        const result = await this.passwordResetRepository.save(passwordReset);
        return result;
    }

    async getAll(): Promise<ResetPassword[]> {
        const result = await this.passwordResetRepository.find();
        return result;
    }

    async getById(id: string): Promise<ResetPassword> {
        const options = { where: { id } };
        const result = await this.passwordResetRepository.findOne(options);
        return result;
    }

    async getByToken(token: string): Promise<ResetPassword> {
        const options = { where: { token } };
        const result = await this.passwordResetRepository.findOne(options);
        return result;
    }

    async getByUserId(userId: string): Promise<ResetPassword[]> {
        const options = { where: { userId } };
        const result = await this.passwordResetRepository.find(options);
        return result;
    }

    async invalidate(instance: ResetPassword): Promise<ResetPassword> {
        await this.passwordResetRepository.update(instance.id, instance);
        return instance;
    }
}
