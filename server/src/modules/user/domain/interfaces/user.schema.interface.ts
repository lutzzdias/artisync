export interface IUserSchema {
    id?: string;
    email: string;
    password: string;
    username: string;
    bio?: string;
    // profilePic: string; // TODO: Future implementation (cloud or blob)
    refreshToken?: string; // TODO: Check if should be optional
    lastLogin?: Date;
    deletedDefaultStates?: string[]; // TODO: Create whole new table for this
    createdAt?: Date;
    updatedAt?: Date;
}
