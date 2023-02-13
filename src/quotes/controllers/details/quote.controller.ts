import { Request, Response } from "express";
import { ErrorHandler } from "../../../error-handler/error.handler";
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
      const err = error as any;

      const response = ErrorHandler.getError(err);

      res.status(response.status).json(response.message);
      return;
    }
  }
}
