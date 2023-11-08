import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { SignInDto } from '../dtos/signin.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<SignInDto> {
        const user = await this.authService.authenticateUser(
            username,
            password,
        );
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
