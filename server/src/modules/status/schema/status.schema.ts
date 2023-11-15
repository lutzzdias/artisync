import { EntitySchema } from 'typeorm';
import { Status } from '../entity/status.entity';

export const StatusSchema = new EntitySchema<Status>({
    name: 'Status',
    target: Status,
    tableName: 'Status',
    columns: {
        id: {
            type: String,
            primary: true,
            generated: 'uuid',
        },
        name: {
            type: String,
            length: 128,
        },
        description: {
            type: String,
            length: 255,
            nullable: true,
        },
        color: {
            type: String,
            length: 7,
        },
        userId: {
            type: 'uuid',
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
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            onDelete: 'CASCADE',
            nullable: true,
            joinColumn: {
                referencedColumnName: 'id',
                name: 'userId',
            },
        },
    },
});
