import { UserRepository } from "../../repositories/details/user.repository";
import { IUserService } from "./../user.service.interface";

export class UserService implements IUserService {
  constructor(private readonly repository: UserRepository) {}

  async findAll() {
    const users = await this.repository.findAll();
    return users;
  }

  async findById(id: number) {
    const user = await this.repository.findById(id);
    return user;
  }
}
