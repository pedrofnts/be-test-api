import { IUser } from "../../users/models/user.interface";

export interface IQuote {
  user: IUser;
  userQuote: number;
}
