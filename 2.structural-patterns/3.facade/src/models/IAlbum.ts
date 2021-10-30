import { IUser } from "./IUser";

export interface IAlbum {
  id: number;
  title: string;
  userId: number;
  user: IUser;
}
