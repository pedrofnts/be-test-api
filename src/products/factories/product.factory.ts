import { ProductController } from "../controllers/product.controller";
import { ProductService } from "../services/product.service";
import { ProductRepository } from "./../repositories/product.repository";

function productsFactory() {
  const productRepository = new ProductRepository();
  const productService = new ProductService(productRepository);
  const productController = new ProductController(productService);

  return { productController, productService };
}

export const { productController, productService } = productsFactory();
