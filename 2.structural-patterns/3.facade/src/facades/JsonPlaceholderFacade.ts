import { IJsonPlaceholderService } from "../types/IJsonPlaceholderService";
import { IUser } from "../models/IUser";

export class JsonPlaceholderFacade {
  // Dependency inversion
  constructor(private _service: IJsonPlaceholderService) {}

  // Facade combines multiple calls to the api, aggregate the data, the client is not aware of this.
  async getUser(userId: number): Promise<IUser | null> {
    const users = await this._service.getUsers();
    const currentUser = users.find((u) => u.id === userId);

    if (currentUser) {
      const [posts, todos] = await Promise.all([
        this._service.getPosts(),
        this._service.getTodos(),
      ]);
      currentUser.posts = posts.filter((p) => p.userId === userId);
      currentUser.todos = todos.filter((t) => t.userId === userId);
      return currentUser;
    } else {
      return null;
    }
  }
}
