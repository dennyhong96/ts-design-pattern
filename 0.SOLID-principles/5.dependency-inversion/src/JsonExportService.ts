import { IExportService } from "./IExportServe";
import { IPost } from "./IPost";

export class JsonExportService implements IExportService {
  async export(posts: IPost[]): Promise<string> {
    return JSON.stringify(posts);
  }
}
