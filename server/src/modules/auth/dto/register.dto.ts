import {
    IsEmail,
    IsLowercase,
    IsNotEmpty,
    IsString,
    IsStrongPassword,
} from 'class-validator';

export class RegisterDto {
    @IsNotEmpty()
    @IsLowercase()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
    })
    password: string;
}
