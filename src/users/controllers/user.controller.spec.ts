import { fakeUserService } from "../__mocks__/fake.user.service";
import { usersMock } from "../__mocks__/fake.users";
import { mockRequest, mockResponse } from "../__mocks__/fake.express";
import { UserController } from "./user.controller";

const userController = new UserController(fakeUserService);
const req = mockRequest();
const res = mockResponse();

describe("UserController", () => {
  describe("findAll", () => {
    it("should return an array of users", async () => {
      await userController.findAll(req, res);

      expect(res.json).toBeCalledWith(usersMock.data);
      expect(res.status).toBeCalledWith(200);
    });
    it("should return error", async () => {
      fakeUserService.findAll = jest.fn().mockRejectedValue("Error");

      await userController.findAll(req, res);

      expect(res.json).toBeCalledWith("Error");
      expect(res.status).toBeCalledWith(500);
    });
  });
  describe("findById", () => {
    it("should return an object", async () => {
      await userController.findById(req, res);

      expect(res.json).toBeCalledWith(usersMock.data[0]);
      expect(res.status).toBeCalledWith(200);
    });
    it("should return error", async () => {
      fakeUserService.findById = jest.fn().mockRejectedValue("Error");

      await userController.findById(req, res);

      expect(res.json).toBeCalledWith("Error");
      expect(res.status).toBeCalledWith(500);
    });
  });
});
