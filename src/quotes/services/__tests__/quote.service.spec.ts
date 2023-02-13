import { fakeProductsIds } from "./../../../products/__mocks__/fake.products.ids";
import { fakeProductService } from "../../../products/__mocks__/fake.product.service";
import { fakeUserService } from "../../../users/__mocks__/fake.user.service";
import { QuoteService } from "../details/quote.service";

const quoteService = new QuoteService(fakeProductService, fakeUserService);

const result = {
  user: {
    id: 1,
    name: "cvRhuZicvV",
    tax: 79,
  },
  userQuote: 54865.5,
};

describe("QuoteService", () => {
  describe("createQuote", () => {
    it("should return an object", async () => {
      const quote = await quoteService.createQuote(1, fakeProductsIds);

      expect(quote).toBeInstanceOf(Object);
    });
    it("should return an object with the same values as the mock", async () => {
      const quote = await quoteService.createQuote(1, fakeProductsIds);

      expect(quote).toEqual(result);
    });
  });
});
