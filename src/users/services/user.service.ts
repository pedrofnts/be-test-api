import { UserRepository } from './../repositories/user.repository';

export class UserService {
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
