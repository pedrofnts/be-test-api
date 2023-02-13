import { UserRepository } from "../repositories/details/user.repository";
import { usersMock } from "./fake.users";

export const fakeUserRepository = {
  findAll() {
    return Promise.resolve(usersMock.data);
  },

  findById() {
    return Promise.resolve(usersMock.data[0]);
  },
} as any as UserRepository;
