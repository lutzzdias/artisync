import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { IUserRepository } from '../domain/interfaces/user.repository.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly repository: IUserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Convert from DTO to Entity
    const user = User.fromCreateUserDto(createUserDto);
    // TODO: Add logic
    // Convert Entity to Schema
    const userSchema = User.toSchema(user);
    return await this.repository.create(userSchema);
  }

  async getById(id: string) {
    // TODO: Add logic
    return await this.repository.getById(id);
  }

  // TODO: Send ID through parameter vs through DTO
  async update(id: string, updateUserDto: UpdateUserDto) {
    const userSchema = await this.repository.getById(id);
    if (userSchema) {
      // Convert schema to entity
      const oldUser = User.fromSchema(userSchema);
      // TODO: Validation and logic
      // Update old entity with received values
      const updatedUser = oldUser.fromUpdateUserDto(updateUserDto);
      // Save to the database
      return await this.repository.update(id, updatedUser);
    } else {
      // TODO: Return error
      return new User();
    }
  }

  async delete(id: string) {
    // TODO: Add logic
    // TODO: Add a return (success or error)
    return await this.repository.delete(id);
  }
}
