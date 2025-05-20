import {
    IsDate,
    IsEmail,
    IsLowercase,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
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

    @IsOptional()
    bio: string;

    @IsOptional()
    image: string;

    @IsOptional()
    refreshToken: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}
