import { IQuote } from "../models/quote.interface";

export interface IQuoteService {
  createQuote(userId: number, productsId: number[]): Promise<IQuote>;
}
