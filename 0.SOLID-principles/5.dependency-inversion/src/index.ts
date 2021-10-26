import { JsonExportService } from "./JsonExportService";
import { MockPostService } from "./MockPostService";
import { NewsFeed } from "./NewsFeed";
import { PostService } from "./PostService";

const postService = new PostService();
postService
  .export(new JsonExportService())
  .then((exportedPostsJson) =>
    console.log("Exported Posts Json Data: ", exportedPostsJson)
  );

const newsFeed = new NewsFeed(postService);
newsFeed.show();

const mockNewsFeed = new NewsFeed(new MockPostService());
mockNewsFeed.show();
