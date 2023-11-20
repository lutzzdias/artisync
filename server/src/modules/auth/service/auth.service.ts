import {
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ArgonHelper } from 'src/helper/argon.helper';
import { User } from 'src/modules/user/entity/user.entity';
import { UserService } from 'src/modules/user/service/user.service';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { RegisterDto } from '../dto/register.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { SignInDto } from '../dto/signin.dto';
import { ResetPassword } from '../entity/reset-password.entity';
import { AuthRepository } from '../repository/auth.repository';
import { Tokens } from '../type/tokens.type';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly argonHelper: ArgonHelper,
        private readonly authRepository: AuthRepository,
    ) {}

    async updateRefreshToken(userId: string, refreshToken: string) {
        const hashedRefreshToken = await this.argonHelper.hash(refreshToken);
        await this.userService.update(userId, {
            refreshToken: hashedRefreshToken,
        });
    }

    generateTokens(userId: string): Tokens {
        const payload = { sub: userId };
        return {
            accessToken: this.jwtService.sign(payload, {
                secret: process.env.ACCESS_TOKEN_SECRET,
                expiresIn: '30m',
            }),
            refreshToken: this.jwtService.sign(payload, {
                secret: process.env.REFRESH_TOKEN_SECRET,
                expiresIn: '90d',
            }),
        };
    }

    async authenticateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.getByUsername(username);
        if (
            user &&
            (await this.argonHelper.isHashValid(user.password, password))
        ) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async signin(signInDto: SignInDto): Promise<Tokens> {
        const user = await this.authenticateUser(
            signInDto.username,
            signInDto.password,
        );

        if (!user) throw new ForbiddenException('Invalid credentials');

        const tokens: Tokens = this.generateTokens(user.id);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }

    async register(registerDto: RegisterDto): Promise<Tokens> {
        registerDto.password = await this.argonHelper.hash(
            registerDto.password,
        );
        const user: User = { ...registerDto };
        const result = await this.userService.create(user);
        if (!result) throw InternalServerErrorException;
        const tokens: Tokens = this.generateTokens(result.id);
        await this.updateRefreshToken(result.id, tokens.refreshToken);
        return tokens;
    }

    // TODO: Only allow user to change their own password
    async changePassword(changePasswordDto: ChangePasswordDto): Promise<void> {
        const { email, currentPassword, newPassword } = changePasswordDto;

        const user = await this.userService.getByEmail(email);
        if (!user) throw new NotFoundException('User not found');

        const isCurrentPasswordValid = await this.argonHelper.isHashValid(
            user.password,
            currentPassword,
        );
        if (!isCurrentPasswordValid)
            throw new ForbiddenException('Invalid credentials');

        const hashedNewPassword = await this.argonHelper.hash(newPassword);

        await this.userService.update(user.id, { password: hashedNewPassword });
    }

    async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void> {
        const { email } = forgotPasswordDto;
        const user = await this.userService.getByEmail(email);
        if (!user) throw new NotFoundException('User not found');

        const payload = { sub: user.id };
        const token = this.jwtService.sign(payload, {
            secret: process.env.RESET_PASSWORD_TOKEN_SECRET,
            expiresIn: '15m',
        });

        // TODO: Create unique link to reset password
        // TODO: Send email with link to reset password

        const resetPassword: ResetPassword = {
            userId: user.id,
            token,
            used: false,
            expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
        };

        await this.authRepository.create(resetPassword);
    }

    async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void> {
        const { email, token, password } = resetPasswordDto;

        const user = await this.userService.getByEmail(email);
        if (!user) throw new NotFoundException('User not found'); // Validate user

        const payload = await this.jwtService.verifyAsync(token, {
            secret: process.env.RESET_PASSWORD_TOKEN_SECRET,
        });

        const userId = payload.sub;
        if (userId !== user.id) throw new ForbiddenException('Access denied');

        const instance = await this.authRepository.getByToken(token);

        if (!instance) throw new NotFoundException('Token not found');
        if (instance.used) throw new ForbiddenException('Token already used');
        if (instance.expiresAt < new Date())
            throw new ForbiddenException('Token expired');

        // update resetPassword instance
        instance.used = true;
        instance.expiresAt = new Date();

        await this.authRepository.invalidate(instance);

        const hashedPassword = await this.argonHelper.hash(password);
        await this.userService.update(user.id, { password: hashedPassword });

        await this.logout(user.id);
    }

    async logout(userId: string) {
        // TODO: Add refreshtoken should not be null in order to logout
        await this.userService.update(userId, { refreshToken: null });
    }

    async refresh(userId: string, refreshToken: string) {
        const user = await this.userService.getById(userId);
        if (!user || !user.refreshToken) throw ForbiddenException;
        const isRefreshTokenValid = await this.argonHelper.isHashValid(
            user.refreshToken,
            refreshToken,
        );
        if (!isRefreshTokenValid) throw new ForbiddenException('Access denied');
        const tokens: Tokens = this.generateTokens(user.id);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
}
