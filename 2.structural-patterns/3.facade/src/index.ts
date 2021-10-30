import { JsonPlaceholderService } from "./services/JsonPlaceholderService";
import { JsonPlaceholderFacade } from "./facades/JsonPlaceholderFacade";

async function main() {
  const jsonPlaceholderFacade = new JsonPlaceholderFacade(
    new JsonPlaceholderService()
  );

  const user = await jsonPlaceholderFacade.getUser(1);
  console.log(JSON.stringify(user, null, 2));
}
main();
