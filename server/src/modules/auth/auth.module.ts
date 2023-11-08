import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';

@Module({
    imports: [
        ConfigModule.forRoot(), // loads .env file
        UserModule,
        PassportModule,
        JwtModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        AccessTokenStrategy,
        RefreshTokenStrategy,
    ],
})
export class AuthModule {}
