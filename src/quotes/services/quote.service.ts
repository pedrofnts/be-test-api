import { UserService } from "./../../users/services/user.service";
import { ProductService } from "../../products/services/product.service";

export class QuoteService {
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
