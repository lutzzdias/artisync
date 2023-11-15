import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { StatusController } from './controller/status.controller';
import { StatusRepository } from './repository/status.repository';
import { StatusSchema } from './schema/status.schema';
import { StatusService } from './service/status.service';

@Module({
    imports: [UserModule, TypeOrmModule.forFeature([StatusSchema])],
    controllers: [StatusController],
    providers: [StatusService, StatusRepository],
})
export class StatusModule {}
