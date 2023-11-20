import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArgonHelper } from 'src/helper/argon.helper';
import { UserModule } from '../user/user.module';
import { AuthController } from './controller/auth.controller';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { AuthRepository } from './repository/auth.repository';
import { ResetPasswordSchema } from './schema/reset-password.schema';
import { AuthService } from './service/auth.service';
import { AccessTokenStrategy } from './strategy/access-token.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { RefreshTokenStrategy } from './strategy/refresh-token.strategy';

@Module({
    imports: [
        ConfigModule.forRoot(), // loads .env file
        TypeOrmModule.forFeature([ResetPasswordSchema]),
        UserModule,
        PassportModule,
        JwtModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        AuthRepository,
        LocalStrategy,
        AccessTokenStrategy,
        RefreshTokenStrategy,
        ArgonHelper,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
    exports: [AuthService, ArgonHelper],
})
export class AuthModule {}
