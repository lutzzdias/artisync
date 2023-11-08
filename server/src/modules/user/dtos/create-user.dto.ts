// TODO: Add nest decorators
export class CreateUserDto {
    email: string;
    password: string;
    username: string;
    refreshToken?: string;
    bio?: string;
    // profilePic: string;
}
