import { QuoteService } from "../services/quote.service";

export const fakeQuoteService = {
  createQuote: () => Promise.resolve({}),
} as any as QuoteService;
