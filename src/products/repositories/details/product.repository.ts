import { IProductRepository } from "./../product.repository.interface";
import axios from "axios";

export class ProductRepository implements IProductRepository {
  constructor() {}

  async findAll() {
    const products = await axios.get(
      "https://mockend.com/juunegreiros/BE-test-api/products"
    );

    return products.data;
  }

  async findById(id: Number) {
    const product = await axios.get(
      `https://mockend.com/juunegreiros/BE-test-api/products/${id}`
    );

    return product.data;
  }
}
