import { Request, Response } from "express";
import { QuoteService } from "../../services/details/quote.service";
import { IQuoteController } from "../quote.controller.interface";

export class QuoteController implements IQuoteController {
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
