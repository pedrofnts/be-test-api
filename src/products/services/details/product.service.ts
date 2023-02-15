import { IProduct } from "./../../models/product.interface";
import { ProductRepository } from "../../repositories/details/product.repository";
import { IProductRepository } from "../../repositories/product.repository.interface";
import { IProductService } from "../product.service.interface";

export class ProductService implements IProductService {
  constructor(private readonly repository: IProductRepository) {}

  async findAll(): Promise<IProduct[]> {
    const products = await this.repository.findAll();

    return products;
  }

  async findById(id: number): Promise<IProduct> {
    const product = await this.repository.findById(id);

    return product;
  }
}
