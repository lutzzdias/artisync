import { JwtService } from '@nestjs/jwt';
import { ArgonHelper } from 'src/common/helper/argon.helper';
import { UserService } from 'src/modules/user/service/user.service';
import { Tokens } from '../../../common/type/tokens.type';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { RegisterDto } from '../dto/register.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { SignInDto } from '../dto/signin.dto';
import { AuthRepository } from '../repository/auth.repository';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly argonHelper;
    private readonly authRepository;
    constructor(userService: UserService, jwtService: JwtService, argonHelper: ArgonHelper, authRepository: AuthRepository);
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
    generateTokens(userId: string): Tokens;
    authenticateUserWithUsername(username: string, password: string): Promise<any>;
    authenticateUserWithEmail(email: string, password: string): Promise<{
        id?: string;
        username: string;
        email: string;
        bio?: string;
        image?: string;
        refreshToken?: string;
        updatedUsernameAt?: Date;
        createdAt?: Date;
        updatedAt?: Date;
    }>;
    signin(signInDto: SignInDto): Promise<Tokens>;
    register(registerDto: RegisterDto): Promise<Tokens>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<void>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
    resetPassword(token: string, resetPasswordDto: ResetPasswordDto): Promise<void>;
    logout(userId: string): Promise<void>;
    refresh(userId: string, refreshToken: string): Promise<Tokens>;
}
