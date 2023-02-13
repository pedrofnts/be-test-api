import { Request, Response } from "express";

export interface IProductController {
  findAll(req: Request, res: Response): Promise<void>;
  findById(req: Request, res: Response): Promise<void>;
}
