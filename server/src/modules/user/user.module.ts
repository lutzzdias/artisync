import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/typeorm/repository/user.repository';
import { UserSchema } from './repository/typeorm/schema/user.schema';
import { UserService } from './service/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserSchema])],
    controllers: [UserController],
    providers: [
        UserService,
        {
            provide: 'IUserRepository',
            useClass: UserRepository,
        },
    ],
})
export class UserModule {}
