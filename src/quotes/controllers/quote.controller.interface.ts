import { Request, Response } from "express";

export interface IQuoteController {
  createQuote(req: Request, res: Response): Promise<void>;
}
