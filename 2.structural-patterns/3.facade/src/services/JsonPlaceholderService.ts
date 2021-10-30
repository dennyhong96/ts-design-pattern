import axios from "axios";

import { IJsonPlaceholderService } from "../types/IJsonPlaceholderService";
import { IAlbum } from "../models/IAlbum";
import { IComment } from "../models/IComment";
import { IPhoto } from "../models/IPhoto";
import { IPost } from "../models/IPost";
import { ITodo } from "../models/ITodo";
import { IUser } from "../models/IUser";

export class JsonPlaceholderService implements IJsonPlaceholderService {
  private _baseUrl = `https://jsonplaceholder.typicode.com`;

  private _endpoints = {
    posts: `${this._baseUrl}/posts`,
    comments: `${this._baseUrl}/comments`,
    albums: `${this._baseUrl}/albums`,
    photos: `${this._baseUrl}/posts`,
    todos: `${this._baseUrl}/todos`,
    users: `${this._baseUrl}/users`,
  };

  private async _getEntity<T>(url: string): Promise<T[]> {
    const res = await axios.get<T[]>(url);
    return res.data;
  }

  public async getAlbums(): Promise<IAlbum[]> {
    return this._getEntity<IAlbum>(this._endpoints.albums);
  }

  public async getComments(): Promise<IComment[]> {
    return this._getEntity<IComment>(this._endpoints.comments);
  }

  public async getPhotos(): Promise<IPhoto[]> {
    return this._getEntity<IPhoto>(this._endpoints.photos);
  }

  public async getPosts(): Promise<IPost[]> {
    return this._getEntity<IPost>(this._endpoints.posts);
  }

  public async getTodos(): Promise<ITodo[]> {
    return this._getEntity<ITodo>(this._endpoints.todos);
  }

  public async getUsers(): Promise<IUser[]> {
    return this._getEntity<IUser>(this._endpoints.users);
  }
}
