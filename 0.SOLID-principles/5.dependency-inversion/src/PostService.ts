import fs from "fs/promises";
import { IExportService } from "./IExportServe";

import { IPost } from "./IPost";
import { IPostService } from "./IPostService";

export class PostService implements IPostService {
  dataSource: string;

  constructor(private _fileName: string = "./src/_db.json") {
    this.dataSource = "File system";
  }

  async getAll(): Promise<IPost[]> {
    const file = await fs.readFile(this._fileName, { encoding: "utf-8" });
    const posts: IPost[] = JSON.parse(file);
    return posts;
  }

  async save(post: IPost) {
    const posts = await this.getAll();
    posts.push(post);
    await fs.writeFile(this._fileName, JSON.stringify(posts));
  }

  async export(exportService: IExportService) {
    const posts = await this.getAll();
    return exportService.export(posts);
  }
}
