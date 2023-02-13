import { fakeQuoteService } from "./../../__mocks__/fake.quote.service";
import { fakeProductsIds } from "../../../products/__mocks__/fake.products.ids";
import {
  mockRequest,
  mockResponse,
} from "../../../users/__mocks__/fake.express";
import { QuoteController } from "../details/quote.controller";

const quoteController = new QuoteController(fakeQuoteService);
const req = mockRequest();
const res = mockResponse();

describe("QuoteController", () => {
  describe("createQuote", () => {
    it("should return an object", async () => {
      fakeQuoteService.createQuote = jest.fn().mockResolvedValue({});

      await quoteController.createQuote(req, res);

      expect(res.json).toBeCalledWith({});
      expect(res.status).toBeCalledWith(200);
    });
    it("should return error", async () => {
      fakeQuoteService.createQuote = jest.fn().mockRejectedValue("Error");

      await quoteController.createQuote(req, res);

      expect(res.json).toBeCalledWith("Error");
      expect(res.status).toBeCalledWith(500);
    });
  });
});
