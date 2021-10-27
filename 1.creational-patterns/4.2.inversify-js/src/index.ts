import container from "./inversify.config";
import { IDepC } from "./IDepC";
import { TYPES } from "./types";

const serviceC = container.get<IDepC>(TYPES.IDepC);
serviceC.doC();
