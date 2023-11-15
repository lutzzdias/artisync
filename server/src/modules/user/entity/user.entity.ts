export class User {
    id?: string; // Optional to allow db to generate id
    username: string;
    email: string;
    password: string;
    bio?: string;
    image?: string;
    refreshToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
