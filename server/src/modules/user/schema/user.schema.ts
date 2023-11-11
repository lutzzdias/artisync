import { EntitySchema } from 'typeorm';
import { User } from '../entity/user.entity';

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid',
        },
        username: {
            type: String,
            length: 255,
        },
        email: {
            type: String,
            length: 255,
        },
        password: {
            type: String,
            length: 255,
        },
        bio: {
            type: 'text',
            nullable: true,
        },
        image: {
            type: String,
            length: 255,
            nullable: true,
        },
        refreshToken: {
            type: String,
            length: 510,
            nullable: true,
        },
        createdAt: {
            type: Date,
            createDate: true,
        },
        updatedAt: {
            type: Date,
            updateDate: true,
        },
    },
});
