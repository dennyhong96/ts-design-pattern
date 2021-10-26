import { IPost } from "./IPost";

export interface IExportService {
  export(posts: IPost[]): Promise<string>;
}
