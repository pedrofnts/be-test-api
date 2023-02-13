import { IProduct } from "../models/product.interface";

export interface IProductRepository {
  findAll(): Promise<IProduct[]>;
  findById(id: number): Promise<IProduct>;
}
