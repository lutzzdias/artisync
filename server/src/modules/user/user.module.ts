import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/user.repository';
import { UserSchema } from './schema/user.schema';
import { UserService } from './service/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserSchema])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService],
})
export class UserModule {}
