import { IUser } from "../models/user.interface";

export interface IUserService {
  findAll(): Promise<IUser[]>;
  findById(id: number): Promise<IUser>;
}
