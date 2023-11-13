import {
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '../user/entity/user.entity';
import { UserService } from '../user/service/user.service';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signin.dto';
import { ArgonHelper } from './helper/argon.helper';
import { Tokens } from './type/tokens.type';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly argonHelper: ArgonHelper,
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
            access_token: this.jwtService.sign(payload, {
                secret: process.env.ACCESS_TOKEN_SECRET,
                expiresIn: '30m',
            }),
            refresh_token: this.jwtService.sign(payload, {
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
        const user = await this.userService.getByUsername(signInDto.username);
        if (
            !user ||
            !this.argonHelper.isHashValid(user.password, signInDto.password)
        )
            throw new ForbiddenException('Invalid credentials');

        const tokens: Tokens = this.generateTokens(user.id);
        await this.updateRefreshToken(user.id, tokens.refresh_token);
        return tokens;
    }

    async register(registerDto: RegisterDto): Promise<Tokens> {
        registerDto.password = await this.argonHelper.hash(
            registerDto.password,
        );
        // TODO: Validate registerDto data and throw 400 if invalid
        const user: User = { ...registerDto };
        const result = await this.userService.create(user);
        if (!result) throw InternalServerErrorException;
        const tokens: Tokens = this.generateTokens(result.id);
        await this.updateRefreshToken(result.id, tokens.refresh_token);
        return tokens;
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
        await this.updateRefreshToken(user.id, tokens.refresh_token);
        return tokens;
    }
}
