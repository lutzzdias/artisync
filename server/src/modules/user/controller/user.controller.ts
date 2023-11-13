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
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const { ...userData } = createUserDto;
        const user: User = { ...userData };
        const result = await this.userService.create(user);
        return result;
    }

    @Get()
    async getAll() {
        const result = await this.userService.getAll();
        return result;
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const result = await this.userService.getById(id);
        return result;
    }

    @Get()
    async getByUsername(@Query('username') username: string) {
        const result = await this.userService.getByUsername(username);
        return result;
    }

    // TODO: Do not allow to update username, email and password by this endpoint
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        const result = await this.userService.update(id, updateUserDto);
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.userService.delete(id);
        return result;
    }
}
