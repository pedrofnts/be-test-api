import { Request, Response } from "express";
import { ErrorHandler } from "../../../error-handler/error.handler";
import { ProductService } from "../../services/details/product.service";
import { IProductService } from "../../services/product.service.interface";
import { IProductController } from "../product.controller.interface";

export class ProductController implements IProductController {
  constructor(private readonly ProductService: IProductService) {}

  async findAll(req: Request, res: Response) {
    try {
      const products = await this.ProductService.findAll();

      res.status(200).json(products);
      return;
    } catch (error) {
      const err = error as any;

      const response = ErrorHandler.getError(err);

      res.status(response.status).json(response.message);
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
      const err = error as any;

      const response = ErrorHandler.getError(err);

      res.status(response.status).json(response.message);
      return;
    }
  }
}
