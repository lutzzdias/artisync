import { EntitySchema } from 'typeorm';
import { ResetPassword } from '../entity/reset-password.entity';

export const ResetPasswordSchema = new EntitySchema<ResetPassword>({
    name: 'ResetPassword',
    target: ResetPassword,
    tableName: 'ResetPassword',
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid',
        },
        userId: {
            type: 'uuid',
        },
        token: {
            type: String,
        },
        used: {
            type: Boolean,
            default: false,
        },
        expiresAt: {
            type: Date,
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
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            onDelete: 'CASCADE',
            nullable: false,
            joinColumn: {
                referencedColumnName: 'id',
                name: 'userId',
            },
        },
    },
});
