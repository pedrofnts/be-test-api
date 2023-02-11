import { productService } from "../../products/factories/product.factory";
import { userService } from "../../users/factories/user.factory";
import { QuoteController } from "../controllers/quote.controller";
import { QuoteService } from "../services/quote.service";

function quoteFactory() {
  const quoteService = new QuoteService(productService, userService);
  const quoteController = new QuoteController(quoteService);

  return { quoteController };
}

export const { quoteController } = quoteFactory();
