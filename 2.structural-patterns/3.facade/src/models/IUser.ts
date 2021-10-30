import { IPost } from "./IPost";
import { ITodo } from "./ITodo";

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  posts: IPost[];
  todos: ITodo[];
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
