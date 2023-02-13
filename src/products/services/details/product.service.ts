import { ProductRepository } from "../../repositories/details/product.repository";
import { IProductService } from "../product.service.interface";

export class ProductService implements IProductService {
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
