import { User } from 'src/modules/user/entity/user.entity';
export declare class ResetPassword {
    id?: string;
    user?: User;
    userId: string;
    token: string;
    used: boolean;
    expiresAt: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
