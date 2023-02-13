import { usersMock } from "../../__mocks__/fake.users";
import { UserRepository } from "../details/user.repository";

const userRepository = new UserRepository();

describe("UserRepository", () => {
  describe("getAll", () => {
    it("should return an array of users", async () => {
      const users = await userRepository.findAll();

      expect(users).toBeInstanceOf(Array);
    });
    it("should return an array of users with the same length as the mock", async () => {
      const users = await userRepository.findAll();

      expect(users).toHaveLength(usersMock.data.length);
    });
    it("should return an array of users with the same values as the mock", async () => {
      const users = await userRepository.findAll();

      expect(users).toEqual(usersMock.data);
    });
  });
  describe("getById", () => {
    it("should return an object", async () => {
      const user = await userRepository.findById(1);

      expect(user).toBeInstanceOf(Object);
    });
    it("should return an object with the same values as the mock", async () => {
      const user = await userRepository.findById(1);

      expect(user).toEqual(usersMock.data[0]);
    });
  });
});
