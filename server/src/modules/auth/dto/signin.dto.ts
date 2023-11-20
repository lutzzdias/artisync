// TODO: Add nest decorators

import { IsNotEmpty, IsString } from 'class-validator';

// TODO: Add sign in with email
export class SignInDto {
    @IsString()
    @IsNotEmpty()
    username?: string;

    // @IsEmail()
    // @IsNotEmpty()
    // email?: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
