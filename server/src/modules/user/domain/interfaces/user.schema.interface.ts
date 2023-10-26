export interface IUserSchema {
  id?: string;
  email: string;
  password: string;
  username: string;
  bio: string;
  // profilePic: string; // TODO: Future implementation (cloud or blob)
  lastLogin?: Date;
  deletedDefaultStates?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
