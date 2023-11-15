import { User } from 'src/modules/user/entity/user.entity';

export class Status {
    id?: string;
    name: string;
    description?: string;
    color: string; // hex for color

    User?: User; // FK
    userId?: string; // if null -> is default

    createdAt?: Date;
    updatedAt?: Date;
}
