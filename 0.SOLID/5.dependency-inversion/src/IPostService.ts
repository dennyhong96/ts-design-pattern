import { IExportService } from "./IExportServe";
import { IPost } from "./IPost";

// IPostService defines how PostServices should behave
export interface IPostService {
  dataSource: string;
  getAll(): Promise<IPost[]>;
  save(post: IPost): Promise<void>;

  // use whatever export service injected to the export method to export the posts
  // depends on loosely coupled abstractions (IExportService), doesn't care about implementation details
  // every post service can have it's primary functionalities (getAll, save) independent from its export functionality
  export(exportService: IExportService): Promise<string>;
}
