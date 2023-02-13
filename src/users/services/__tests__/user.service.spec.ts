import { fakeUserRepository } from "./../../__mocks__/fake.user.repository";
import { usersMock } from "../../__mocks__/fake.users";
import { UserService } from "../details/user.service";

const userService = new UserService(fakeUserRepository);

describe("UserService", () => {
  describe("findAll", () => {
    it("should return an array of users", async () => {
      const users = await userService.findAll();

      expect(users).toBeInstanceOf(Array);
    });
    it("should return an array of users with the same length as the mock", async () => {
      const users = await userService.findAll();

      expect(users).toHaveLength(usersMock.data.length);
    });
    it("should return an array of users with the same values as the mock", async () => {
      const users = await userService.findAll();

      expect(users).toEqual(usersMock.data);
    });
  });
  describe("findById", () => {
    it("should return an object", async () => {
      const user = await userService.findById(1);

      expect(user).toBeInstanceOf(Object);
    });
    it("should return an object with the same values as the mock", async () => {
      const user = await userService.findById(1);

      expect(user).toEqual(usersMock.data[0]);
    });
  });
});
