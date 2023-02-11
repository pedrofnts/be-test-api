import { ProductRepository } from "../repositories/product.repository";

export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async findAll() {
    const products = await this.repository.findAll();

    return products;
  }

  async findById(id: number) {
    const product = await this.repository.findById(id);

    return product;
  }
}
