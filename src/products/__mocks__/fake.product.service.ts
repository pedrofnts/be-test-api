import { productsMock } from "../../products/__mocks__/fake.products";
import { ProductService } from "../services/details/product.service";

export const fakeProductService = {
  findAll() {
    return Promise.resolve(productsMock.data);
  },
  findById() {
    return Promise.resolve(productsMock.data[0]);
  },
} as any as ProductService;
