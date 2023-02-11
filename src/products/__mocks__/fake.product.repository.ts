import { ProductRepository } from "./../repositories/product.repository";
import { productsMock } from "./fake.products";

export const fakeProductRepository = {
  findAll() {
    return Promise.resolve(productsMock.data);
  },

  findById() {
    return Promise.resolve(productsMock.data[0]);
  },
} as any as ProductRepository;
