import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Query,
} from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    async getById(@Param('id') id: string) {
        const result = await this.userService.getById(id);
        return result;
    }

    // TODO: See if there should exist a get all here
    @Get()
    async getByTextData(
        @Query('username') username: string,
        @Query('email') email: string,
    ) {
        let result;
        if (username) result = await this.userService.getByUsername(username);
        else if (email) result = await this.userService.getByEmail(email);
        else result = await this.userService.getAll();
        return result;
    }

    // TODO: Do not allow to update username, email and password by this endpoint
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        // TODO: Convert from UpdateUserDto to User
        const result = await this.userService.update(id, updateUserDto);
        return result;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const result = await this.userService.delete(id);
        return result;
    }
}
