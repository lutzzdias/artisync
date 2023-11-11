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
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signin.dto';
import { Public } from './guard/public.guard';
import { RefreshTokenGuard } from './guard/refresh.guard';
import { Tokens } from './type/tokens.type';

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

    // TODO: Not use @Request
    @Post('auth/logout')
    @HttpCode(HttpStatus.OK)
    async logout(@Request() req) {
        const user = req.user;
        return await this.authService.logout(user.sub);
    }

    // TODO: Not use @Request
    @Public() // Allow to not send Access Token
    @UseGuards(RefreshTokenGuard) // Require Refresh Token
    @Post('auth/refresh')
    @HttpCode(HttpStatus.OK)
    async refresh(@Request() req) {
        const user = req.user;
        return this.authService.refresh(user.sub, user.refreshToken);
    }
}
