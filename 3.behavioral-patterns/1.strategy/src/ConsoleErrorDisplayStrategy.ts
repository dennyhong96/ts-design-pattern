import chalk from "chalk";

import { IErrorDisplayStrategy } from "./types/IErrorDisplayStrategy";

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
  display(title: string, body: string) {
    console.log(`${chalk.red(title)}: ${chalk.blue(body)}`);
  }
}
