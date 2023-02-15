import { IUserService } from "./../../../users/services/user.service.interface";
import { IQuoteService } from "../quote.service.interface";
import { IQuote } from "../../models/quote.interface";
import { IProductService } from "../../../products/services/product.service.interface";

export class QuoteService implements IQuoteService {
  constructor(
    private readonly productService: IProductService,
    private readonly usersService: IUserService
  ) {}

  async createQuote(userId: number, productsId: number[]): Promise<IQuote> {
    const user = await this.usersService.findById(userId);

    const userTax = user.tax / 100;

    const productValues: number[] = [];

    for (const id of productsId) {
      const product = await this.productService.findById(id);

      productValues.push(product.price);
    }

    const productsTotalValue = productValues.reduce((a, b) => a + b);

    const userQuote = (productsTotalValue * userTax).toFixed(2);

    return { user, userQuote };
  }
}
