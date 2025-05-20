import { Strategy } from 'passport-local';
import { SignInDto } from '../dto/signin.dto';
import { AuthService } from '../service/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<SignInDto>;
}
export {};
