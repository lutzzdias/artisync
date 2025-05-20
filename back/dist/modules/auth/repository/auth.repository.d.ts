import { Repository } from 'typeorm';
import { ResetPassword } from '../entity/reset-password.entity';
export declare class AuthRepository {
    private readonly passwordResetRepository;
    constructor(passwordResetRepository: Repository<ResetPassword>);
    create(passwordReset: ResetPassword): Promise<ResetPassword>;
    getAll(): Promise<ResetPassword[]>;
    getById(id: string): Promise<ResetPassword>;
    getByToken(token: string): Promise<ResetPassword>;
    getByUserId(userId: string): Promise<ResetPassword[]>;
    invalidate(instance: ResetPassword): Promise<ResetPassword>;
}
