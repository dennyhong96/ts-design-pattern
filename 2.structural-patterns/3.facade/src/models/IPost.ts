import { IUser } from "./IUser";

export interface IPost {
  id: number;
  userId: number;
  user: IUser;
  title: string;
  body: string;
}
