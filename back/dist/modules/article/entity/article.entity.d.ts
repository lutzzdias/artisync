import { Status } from 'src/modules/status/entity/status.entity';
import { User } from 'src/modules/user/entity/user.entity';
export declare class Article {
    id?: string;
    title: string;
    description?: string;
    link?: string;
    author: string;
    user?: User;
    userId: string;
    status?: Status;
    statusId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
