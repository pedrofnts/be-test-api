import { Request, Response } from "express";
import { ProductService } from "../../services/details/product.service";
import { IProductController } from "../product.controller.interface";

export class ProductController implements IProductController {
  constructor(private readonly ProductService: ProductService) {}

  async findAll(req: Request, res: Response) {
    try {
      const products = await this.ProductService.findAll();

      res.status(200).json(products);
      return;
    } catch (error) {
      res.status(500).json(error);

      return;
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = new Number(req.params.id) as number;

      const product = await this.ProductService.findById(id);

      res.status(200).json(product);
      return;
    } catch (error) {
      res.status(500).json(error);
      return;
    }
  }
}
