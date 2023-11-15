import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { StatusController } from './controller/status.controller';
import { StatusService } from './service/status.service';

@Module({
    imports: [UserModule],
    controllers: [StatusController],
    providers: [StatusService],
})
export class StatusModule {}
