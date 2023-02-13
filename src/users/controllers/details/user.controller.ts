import { IUserController } from "./../user.controller.interface";
import { Request, Response } from "express";
import { UserService } from "../../services/details/user.service";
import { ErrorHandler } from "../../../error-handler/error.handler";

export class UserController implements IUserController {
  constructor(private readonly userService: UserService) {}

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();

      res.status(200).json(users);
      return;
    } catch (error) {
      const err = error as any;

      const response = ErrorHandler.getError(err);

      res.status(response.status).json(response.message);
      return;
    }
  }

  async findById(req: Request, res: Response) {
    const id = new Number(req.params.id) as number;

    try {
      const user = await this.userService.findById(id);
      res.status(200).json(user);
    } catch (error) {
      const err = error as any;

      const response = ErrorHandler.getError(err);

      res.status(response.status).json(response.message);
      return;
    }
  }
}
