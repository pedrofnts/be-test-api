import axios from "axios";

export class UserRepository {
  constructor() {}

  async findAll() {
    const users = await axios.get(
      "https://mockend.com/juunegreiros/BE-test-api/users"
    );
    return users.data;
  }

  async findById(id: number) {
    const user = await axios.get(
      `https://mockend.com/juunegreiros/BE-test-api/users/${id}`
    );
    return user.data;
  }
}
