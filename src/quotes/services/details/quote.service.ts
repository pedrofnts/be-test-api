import { IQuoteService } from "../quote.service.interface";
import { ProductService } from "../../../products/services/details/product.service";
import { UserService } from "../../../users/services/details/user.service";

export class QuoteService implements IQuoteService {
  constructor(
    private readonly productService: ProductService,
    private readonly usersService: UserService
  ) {}

  async createQuote(userId: number, productsId: number[]) {
    const user = await this.usersService.findById(userId);

    const userTax = user.tax / 100;

    const productValues: number[] = [];

    for (const id of productsId) {
      const product = await this.productService.findById(id);

      productValues.push(product.price);
    }

    const productsTotalValue = productValues.reduce((a, b) => a + b);

    const userQuote = productsTotalValue * userTax;

    return { user, userQuote };
  }
}
