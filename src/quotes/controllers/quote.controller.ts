import { Request, Response } from "express";
import { QuoteService } from "./../services/quote.service";

export class QuoteController {
  constructor(private readonly QuoteService: QuoteService) {}

  async createQuote(req: Request, res: Response) {
    const userId = new Number(req.params.id) as number;

    const productsId = req.body.productsId;

    try {
      const quote = await this.QuoteService.createQuote(userId, productsId);

      res.status(200).json(quote);
      return;
    } catch (error) {
      res.status(500).json(error);
      return;
    }
  }
}
