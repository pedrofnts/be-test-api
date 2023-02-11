import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();

      res.status(200).json(users);
      return;
    } catch (error) {
      res.status(500).json(error);
      return;
    }
  }

  async findById(req: Request, res: Response) {
    const id = new Number(req.params.id) as number;

    try {
      const user = await this.userService.findById(id);

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
      return;
    }
  }
}
