import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeormModule } from './infra/gateways/database/typeorm/typeorm.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [ConfigModule.forRoot(), TypeormModule, AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
