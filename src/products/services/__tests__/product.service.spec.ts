import { fakeProductRepository } from "./../../__mocks__/fake.product.repository";
import { productsMock } from "../../__mocks__/fake.products";
import { ProductService } from "../details/product.service";

const productService = new ProductService(fakeProductRepository);

describe("ProductService", () => {
  describe("findAll", () => {
    it("should return an array of products", async () => {
      const products = await productService.findAll();

      expect(products).toBeInstanceOf(Array);
    });
    it("should return an array of products with the same length as the mock", async () => {
      const products = await productService.findAll();

      expect(products).toHaveLength(productsMock.data.length);
    });
    it("should return an array of products with the same values as the mock", async () => {
      const products = await productService.findAll();

      expect(products).toEqual(productsMock.data);
    });
  });
  describe("findById", () => {
    it("should return an object", async () => {
      const product = await productService.findById(1);

      expect(product).toBeInstanceOf(Object);
    });
    it("should return an object with the same values as the mock", async () => {
      const product = await productService.findById(1);

      expect(product).toEqual(productsMock.data[0]);
    });
  });
});
