import { IProduct } from "../models/product.interface";

export interface IProductService {
  findAll(): Promise<IProduct[]>;
  findById(id: number): Promise<IProduct>;
}
