import { CreateUserDto } from '../../dtos/create-user.dto';
import { UpdateUserDto } from '../../dtos/update-user.dto';
import { IUserSchema } from '../interfaces/user.schema.interface';

export class User {
  id: string;
  email: string;
  password: string; // TODO: make it safe
  username: string;
  bio: string;
  // profilePic: string; // TODO: Future implementation (cloud or blob)
  lastLogin: Date;
  deletedDefaultStates: Set<string>;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id?: string,
    email?: string,
    password?: string,
    username?: string,
    bio?: string,
    // profilePic?: string,
    lastLogin?: Date,
    deletedDefaultStates?: Set<string>,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
    this.bio = bio;
    // this.profilePic = profilePic;
    this.lastLogin = lastLogin;
    this.deletedDefaultStates = deletedDefaultStates;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromCreateUserDto(createUserDto: CreateUserDto): User {
    return new User(
      undefined, // id
      createUserDto.email,
      createUserDto.password,
      createUserDto.username,
      createUserDto.bio,
      // createUserDto.profilePic,
      undefined, // lastLogin
      new Set<string>(), // deletedDefaultStates
      undefined, // createdAt
      undefined, // updatedAt
    );
  }

  fromUpdateUserDto(updateUserDto: UpdateUserDto): User {
    return new User(
      this.id,
      updateUserDto.email ?? this.email,
      updateUserDto.password ?? this.password,
      updateUserDto.username ?? this.username,
      updateUserDto.bio ?? this.bio,
      // updateUserDto.profilePic ?? this.profilePic,
      this.lastLogin,
      this.deletedDefaultStates,
      this.createdAt,
      undefined, // updatedAt
    );
  }

  static fromSchema(schema: IUserSchema): User {
    return new User(
      schema.id,
      schema.email,
      schema.password,
      schema.username,
      schema.bio,
      // schema.profilePic,
      schema.lastLogin,
      schema.deletedDefaultStates,
      schema.createdAt,
      schema.updatedAt,
    );
  }

  static toSchema(user: User): IUserSchema {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      username: user.username,
      bio: user.bio,
      // profilePic: user.profilePic,
      lastLogin: user.lastLogin,
      deletedDefaultStates: user.deletedDefaultStates,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
