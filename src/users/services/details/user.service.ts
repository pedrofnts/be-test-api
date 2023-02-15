import { IUserRepository } from "./../../repositories/user.repository.interface";
import { IUser } from "../../models/user.interface";
import { UserRepository } from "../../repositories/details/user.repository";
import { IUserService } from "./../user.service.interface";

export class UserService implements IUserService {
  constructor(private readonly repository: IUserRepository) {}

  async findAll(): Promise<IUser[]> {
    const users = await this.repository.findAll();
    return users;
  }

  async findById(id: number): Promise<IUser> {
    const user = await this.repository.findById(id);
    return user;
  }
}
