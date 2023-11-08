import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { SignInDto } from './dtos/signin.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from './guards/public.guard';
import { RefreshTokenGuard } from './guards/refresh.guard';
import { Tokens } from './types/tokens.type';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @Post('auth/signin')
    @HttpCode(HttpStatus.OK)
    async signin(@Body() signInDto: SignInDto): Promise<Tokens> {
        return await this.authService.signin(signInDto);
    }

    @Public()
    @Post('auth/register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() registerDto: RegisterDto): Promise<Tokens> {
        return await this.authService.register(registerDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('auth/logout')
    @HttpCode(HttpStatus.OK)
    async logout(@Request() req) {
        const user = req.user;
        return await this.authService.logout(user.sub);
    }

    @UseGuards(RefreshTokenGuard)
    @Post('auth/refresh')
    @HttpCode(HttpStatus.OK)
    async refresh(@Request() req) {
        const user = req.user;
        return this.authService.refresh(user.sub, user.refreshToken);
    }
}
