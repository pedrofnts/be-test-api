import express from "express";
import supertest from "supertest";
import userRoute from "../../users/routes/user.routes";
import productRoute from "../../products/routes/product.routes";
import quoteRoutes from "../../quotes/routes/quote.routes";
import { productsMock } from "../../products/__mocks__/fake.products";
import { usersMock } from "./../../users/__mocks__/fake.users";

const app = express();
app.use(express.json());
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/quotes", quoteRoutes);

describe("API", () => {
  describe("GET /products", () => {
    it("should return 200 OK", async () => {
      const reponse = await supertest(app).get("/products");
      expect(reponse.status).toBe(200);
      expect(reponse.body).toStrictEqual(productsMock.data);
    });
  });
  describe("GET /products/:id", () => {
    it("should return 200 OK", async () => {
      const reponse = await supertest(app).get("/products/1");
      expect(reponse.status).toBe(200);
      expect(reponse.body).toStrictEqual(productsMock.data[0]);
    });
  });
  describe("GET /users", () => {
    it("should return 200 OK", async () => {
      const reponse = await supertest(app).get("/users");
      expect(reponse.status).toBe(200);
      expect(reponse.body).toStrictEqual(usersMock.data);
    });
  });
  describe("GET /users/:id", () => {
    it("should return 200 OK", async () => {
      const reponse = await supertest(app).get("/users/1");
      expect(reponse.status).toBe(200);
      expect(reponse.body).toStrictEqual(usersMock.data[0]);
    });
  });
  describe("POST /quotes", () => {
    it("should return 200 OK", async () => {
      const reponse = await supertest(app)
        .post("/quotes/1")
        .send({
          productsId: [1, 2, 3],
        });
      expect(reponse.status).toBe(200);
      expect(reponse.body).toStrictEqual({
        user: {
          id: 1,
          name: "cvRhuZicvV",
          tax: 79,
        },
        userQuote: 11348.35,
      });
    });
  });
});
