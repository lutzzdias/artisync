import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { CreateStatusDto } from '../dto/create-status.dto';
import { UpdateStatusDto } from '../dto/update-status.dto';
import { Status } from '../entity/status.entity';
import { StatusService } from '../service/status.service';

@Controller('status')
export class StatusController {
    constructor(private readonly statusService: StatusService) {}

    @Post()
    async create(@Body() createStatusDto: CreateStatusDto) {
        const status: Status = { ...createStatusDto };
        const result = await this.statusService.create(status);
        return result;
    }

    @Get()
    async getAll(@Query('user') userId: string) {
        let result;

        if (userId) result = await this.statusService.getByUserId(userId);
        else result = await this.statusService.getAll();

        return result;
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const result = this.statusService.getById(id);
        return result;
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateStatusDto: UpdateStatusDto,
    ) {
        // TODO: Convert from UpdateStatusDto to Status
        const result = await this.statusService.update(id, updateStatusDto);
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.statusService.delete(id);
        return result;
    }
}
