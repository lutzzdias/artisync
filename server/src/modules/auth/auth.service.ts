import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as argon from 'argon2';

import { RegisterDto } from './dtos/register.dto';
import { SignInDto } from './dtos/signin.dto';
import { Tokens } from './types/tokens.type';

@Injectable()
export class AuthService {
    constructor(
        // private readonly userService: UserService, TODO: Create user module
        private readonly jwtService: JwtService,
    ) {}

    async isHashValid(hash: string, text: string): Promise<boolean> {
        return argon.verify(hash, text);
    }

    async hash(text: string): Promise<string> {
        return argon.hash(text);
    }

    async updateRefreshToken(userId: string, refreshToken: string) {
        const hashedRefreshToken = await this.hash(refreshToken);
        // TODO: userService
        // await this.userService.update(userId, {
        //     refreshToken: hashedRefreshToken,
        // });
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
        // TODO: userSErvice
        // const user = await this.userService.getByUsername(username);
        // if (user && (await this.isHashValid(user.password, password))) {
        //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
        //     const { password, ...result } = user;
        //     return result;
        // }
        return null;
    }

    async signin(signInDto: SignInDto): Promise<Tokens> {
        // TODO: userService
        // const user = await this.userService.getByUsername(signInDto.username);
        // if (!user || !this.isHashValid(user.password, signInDto.password))
        //     throw new ForbiddenException('Invalid credentials');
        // const tokens: Tokens = this.generateTokens(user.id);
        // await this.updateRefreshToken(user.id, tokens.refresh_token);
        // return tokens;
        return null;
    }

    async register(registerDto: RegisterDto): Promise<Tokens> {
        // TODO: userService and createUserDto/RegisterDto
        // createUserDto.password = await this.hash(createUserDto.password);
        // TODO: Validate createUserDto data and throw 400 if invalid
        // const user = await this.userService.create(createUserDto);
        // if (!user) throw InternalServerErrorException;
        // const tokens: Tokens = this.generateTokens(user.id);
        // await this.updateRefreshToken(user.id, tokens.refresh_token);
        // return tokens;
        return null;
    }

    async logout(userId: string) {
        console.log(userId);
        // TODO: Add refreshtoken should not be null in order to logout
        // TODO: userService
        // await this.userService.update(userId, { refreshToken: null });
    }

    async refresh(userId: string, refreshToken: string) {
        // const user = await this.userService.getById(userId);
        // if (!user || !user.refreshToken) throw ForbiddenException;
        // const isRefreshTokenValid = await this.isHashValid(
        //     user.refreshToken,
        //     refreshToken,
        // );
        // if (!isRefreshTokenValid) throw new ForbiddenException('Access denied');
        // const tokens: Tokens = this.generateTokens(user.id);
        // await this.updateRefreshToken(user.id, tokens.refresh_token);
        // return tokens;
    }
}
