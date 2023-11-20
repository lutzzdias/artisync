import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { JwtAuthGuard } from '../../common/guard/jwt-auth.guard';
import { UserModule } from '../user/user.module';
import { AuthController } from './controller/auth.controller';
import { AuthRepository } from './repository/auth.repository';
import { ResetPasswordSchema } from './schema/reset-password.schema';
import { AuthService } from './service/auth.service';

@Module({
    imports: [
        ConfigModule.forRoot(), // loads .env file
        TypeOrmModule.forFeature([ResetPasswordSchema]),
        UserModule,
        PassportModule,
        JwtModule,
        CommonModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        AuthRepository,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
    exports: [AuthService],
})
export class AuthModule {}
