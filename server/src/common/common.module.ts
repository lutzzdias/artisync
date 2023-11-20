import { Module } from '@nestjs/common';
import { AccessTokenStrategy } from 'src/modules/auth/strategy/access-token.strategy';
import { RefreshTokenStrategy } from 'src/modules/auth/strategy/refresh-token.strategy';
import { ArgonHelper } from './helper/argon.helper';

@Module({
    imports: [],
    controllers: [],
    providers: [AccessTokenStrategy, RefreshTokenStrategy, ArgonHelper],
    exports: [AccessTokenStrategy, RefreshTokenStrategy, ArgonHelper],
})
export class CommonModule {}
