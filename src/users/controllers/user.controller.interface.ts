import { Request, Response } from "express";

export interface IUserController {
  findAll(req: Request, res: Response): Promise<void>;
  findById(req: Request, res: Response): Promise<void>;
}
