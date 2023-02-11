import { ProductController } from "./product.controller";
import { mockRequest, mockResponse } from "../../users/__mocks__/fake.express";
import { fakeProductService } from "../__mocks__/fake.product.service";
import { productsMock } from "../__mocks__/fake.products";

const productController = new ProductController(fakeProductService);
const req = mockRequest();
const res = mockResponse();

describe("ProductController", () => {
  describe("findAll", () => {
    it("should return an array of products", async () => {
      await productController.findAll(req, res);

      expect(res.json).toBeCalledWith(productsMock.data);
      expect(res.status).toBeCalledWith(200);
    });
    it("should return error", async () => {
      fakeProductService.findAll = jest.fn().mockRejectedValue("Error");

      await productController.findAll(req, res);

      expect(res.json).toBeCalledWith("Error");
      expect(res.status).toBeCalledWith(500);
    });
  });
  describe("findById", () => {
    it("should return an object", async () => {
      await productController.findById(req, res);

      expect(res.json).toBeCalledWith(productsMock.data[0]);
      expect(res.status).toBeCalledWith(200);
    });
    it("should return error", async () => {
      fakeProductService.findById = jest.fn().mockRejectedValue("Error");

      await productController.findById(req, res);

      expect(res.json).toBeCalledWith("Error");
      expect(res.status).toBeCalledWith(500);
    });
  });
});
