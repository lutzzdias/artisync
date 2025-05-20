import { Module } from '@nestjs/common';
import { AccessTokenStrategy } from 'src/modules/auth/strategy/access-token.strategy';
import { RefreshTokenStrategy } from 'src/modules/auth/strategy/refresh-token.strategy';
import { ArgonHelper } from './helper/argon.helper';
import { SignInPipe } from './pipe/sign-in.pipe';

@Module({
    imports: [],
    controllers: [],
    providers: [
        AccessTokenStrategy,
        RefreshTokenStrategy,
        ArgonHelper,
        SignInPipe,
    ],
    exports: [
        AccessTokenStrategy,
        RefreshTokenStrategy,
        ArgonHelper,
        SignInPipe,
    ],
})
export class CommonModule {}
