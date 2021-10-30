import { IPostService } from "./IPostService";

export class NewsFeed {
  // Dependency inversion
  // Loosely coupling - _postService can be swapped with any instance of a class that implements IPostService
  constructor(private _postService: IPostService) {}

  async show() {
    const posts = await this._postService.getAll();
    console.log(`From ${this._postService.dataSource}`);
    posts.forEach((post) => {
      console.log(`${post.title}: ${post.body}`);
    });
  }
}
