import { Tokens } from '../../../common/type/tokens.type';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { RegisterDto } from '../dto/register.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { SignInDto } from '../dto/signin.dto';
import { AuthService } from '../service/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(signInDto: SignInDto): Promise<Tokens>;
    register(registerDto: RegisterDto): Promise<Tokens>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<void>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
    resetPassword(token: any, resetPasswordDto: ResetPasswordDto): Promise<void>;
    logout(req: any): Promise<void>;
    refresh(req: any): Promise<Tokens>;
}
