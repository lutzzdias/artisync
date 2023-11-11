import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeormModule } from './infra/database/typeorm.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [ConfigModule.forRoot(), TypeormModule, AuthModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
