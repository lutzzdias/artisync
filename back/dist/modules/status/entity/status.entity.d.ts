import { User } from 'src/modules/user/entity/user.entity';
export declare class Status {
    id?: string;
    name: string;
    description?: string;
    color: string;
    user?: User;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
