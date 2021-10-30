import fs from "fs/promises";

import { IErrorLoggingStrategy } from "./types/IErrorLoggingStrategy";

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
  async log(err: Error): Promise<any> {
    await fs.appendFile("_logs/error.log", `${new Date()} - ${err}\n`, "utf-8");
  }
}
