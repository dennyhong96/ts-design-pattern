import { IUser } from "./IUser";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user: IUser;
}
