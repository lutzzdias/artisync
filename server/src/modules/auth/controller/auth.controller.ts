import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { Public } from '../../../common/guard/public.guard';
import { RefreshTokenGuard } from '../../../common/guard/refresh.guard';
import { Tokens } from '../../../common/type/tokens.type';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { RegisterDto } from '../dto/register.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { SignInDto } from '../dto/signin.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    async signin(@Body() signInDto: SignInDto): Promise<Tokens> {
        return await this.authService.signin(signInDto);
    }

    @Public()
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() registerDto: RegisterDto): Promise<Tokens> {
        return await this.authService.register(registerDto);
    }

    @Post('change-password')
    async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
        return await this.authService.changePassword(changePasswordDto);
    }

    @Public()
    @Post('forgot-password')
    async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
        return await this.authService.forgotPassword(forgotPasswordDto);
    }

    @Public()
    @Post('reset-password')
    async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        return await this.authService.resetPassword(resetPasswordDto);
    }

    // TODO: Not use @Request
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    async logout(@Request() req) {
        const user = req.user;
        return await this.authService.logout(user.sub);
    }

    // TODO: Not use @Request
    @Public() // Allow to not send Access Token
    @UseGuards(RefreshTokenGuard) // Require Refresh Token
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    async refresh(@Request() req) {
        const user = req.user;
        return this.authService.refresh(user.sub, user.refreshToken);
    }
}
