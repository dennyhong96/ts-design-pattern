import { IExportService } from "./IExportServe";
import { IPost } from "./IPost";
import { IPostService } from "./IPostService";

export class MockPostService implements IPostService {
  dataSource: string;
  private posts: IPost[] = [];

  constructor() {
    this.dataSource = "Memory";
    this.posts = [
      { id: 1, title: "title 1", body: "body 1", postedBy: "denny" },
      { id: 2, title: "title 2", body: "body 2", postedBy: "denny" },
      { id: 3, title: "title 3", body: "body 3", postedBy: "denny" },
      { id: 4, title: "title 4", body: "body 4", postedBy: "denny" },
    ];
  }

  async getAll(): Promise<IPost[]> {
    return Promise.resolve(this.posts);
  }

  async save(post: IPost) {
    this.posts.push(post);
    return Promise.resolve();
  }

  async export(exportService: IExportService) {
    const posts = await this.getAll();
    return exportService.export(posts);
  }
}
