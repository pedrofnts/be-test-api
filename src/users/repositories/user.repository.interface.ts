import { IUser } from "../models/user.interface";

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: number): Promise<IUser>;
}
