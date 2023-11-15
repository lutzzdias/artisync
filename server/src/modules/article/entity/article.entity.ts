import { User } from 'src/modules/user/entity/user.entity';

export class Article {
    id?: string; // Optional to allow db to generate id
    title: string;
    description?: string;
    link?: string;
    author: string;
    user?: User; // FK
    userId: string;
    // statusId: string; // FK
    // projectId?: string; // FK
    createdAt?: Date;
    updatedAt?: Date;
}
