import express from "express";
import { productController } from "../factories/product.factory";

const productRoute = express.Router();

productRoute.get("/", productController.findAll.bind(productController));
productRoute.get("/:id", productController.findById.bind(productController));

export default productRoute;
