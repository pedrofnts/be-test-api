import { UserService } from "../services/details/user.service";
import { usersMock } from "./fake.users";

export const fakeUserService = {
  findAll: () => Promise.resolve(usersMock.data),
  findById: () => Promise.resolve(usersMock.data[0]),
} as any as UserService;
