import { IAlbum } from "../models/IAlbum";
import { IComment } from "../models/IComment";
import { IPhoto } from "../models/IPhoto";
import { IPost } from "../models/IPost";
import { ITodo } from "../models/ITodo";
import { IUser } from "../models/IUser";

export interface IJsonPlaceholderService {
  getAlbums(): Promise<IAlbum[]>;
  getComments(): Promise<IComment[]>;
  getPhotos(): Promise<IPhoto[]>;
  getPosts(): Promise<IPost[]>;
  getTodos(): Promise<ITodo[]>;
  getUsers(): Promise<IUser[]>;
}
