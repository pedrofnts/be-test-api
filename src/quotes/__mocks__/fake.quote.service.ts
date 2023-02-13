import { QuoteService } from "../services/details/quote.service";

export const fakeQuoteService = {
  createQuote: () => Promise.resolve({}),
} as any as QuoteService;
