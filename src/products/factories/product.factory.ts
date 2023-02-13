import { ProductController } from "../controllers/details/product.controller";
import { ProductRepository } from "../repositories/details/product.repository";
import { ProductService } from "../services/details/product.service";

function productsFactory() {
  const productRepository = new ProductRepository();
  const productService = new ProductService(productRepository);
  const productController = new ProductController(productService);

  return { productController, productService };
}

export const { productController, productService } = productsFactory();
