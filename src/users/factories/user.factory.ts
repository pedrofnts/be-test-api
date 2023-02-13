import { UserController } from "../controllers/details/user.controller";
import { UserRepository } from "../repositories/details/user.repository";
import { UserService } from "../services/details/user.service";

function usersFactory() {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  return { userController, userService };
}

export const { userController, userService } = usersFactory();
