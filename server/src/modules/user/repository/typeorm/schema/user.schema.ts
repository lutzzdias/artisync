import { IUserSchema } from 'src/modules/user/domain/interfaces/user.schema.interface';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'User' })
export class UserSchema implements IUserSchema {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 255, unique: true })
    email: string;

    @Column({ length: 255, unique: true })
    username: string;

    @Column({ length: 255 })
    password: string;

    @Column({ length: 510, nullable: true })
    bio?: string;

    @Column({ length: 255, nullable: true })
    refreshToken?: string;

    @Column({ type: 'timestamp' })
    lastLogin?: Date;

    @Column('text', { array: true })
    deletedDefaultStates?: string[]; // TODO: Create new table for this

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @CreateDateColumn()
    createdAt?: Date;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    @UpdateDateColumn()
    updatedAt?: Date;
}
