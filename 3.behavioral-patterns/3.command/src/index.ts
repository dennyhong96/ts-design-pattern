import { CommandWorker } from "./CommandWorker";
import { LogCommand } from "./LogCommand";
import { ILogCommandParams } from "./types/ILogCommandParams";

const sleep = async (interval: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, interval));

async function main() {
  const commandWorker = new CommandWorker(5000);

  while (true) {
    try {
      await sleep(1000);
      const b: any = 100;
      b();
    } catch (error) {
      const logParams: ILogCommandParams = {
        title: "Something went wrong",
        body: "Please try again later",
        error: error as Error,
        filename: "_logs/error.log",
      };
      commandWorker.registerCommand(new LogCommand(logParams));
    }
  }
}
main();
