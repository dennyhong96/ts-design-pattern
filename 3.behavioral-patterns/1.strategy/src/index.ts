import { ConsoleErrorDisplayStrategy } from "./ConsoleErrorDisplayStrategy";
import { ErrorHandler } from "./ErrorHandler";
import { FileErrorLoggingStrategy } from "./FileErrorLoggingStrategy";

async function main() {
  const errorHandler = new ErrorHandler(
    new ConsoleErrorDisplayStrategy(),
    new FileErrorLoggingStrategy()
  );

  try {
    throw new Error("This is an error...");
  } catch (error) {
    errorHandler.handle(
      error as Error,
      "Something went wrong....",
      (error as Error).message
    );
  }
}
main();
