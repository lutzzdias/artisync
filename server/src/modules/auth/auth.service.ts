import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as argon from 'argon2';

import { UserService } from '../user/service/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.getByUsername(username);
        if (user && (await argon.verify(user.password, password))) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(user: any) {
        const hashedPassword = await argon.hash(user.password);
        user.password = hashedPassword;
        user = await this.userService.create(user);
        return user;
    }
}
