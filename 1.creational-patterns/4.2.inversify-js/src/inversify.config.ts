import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./types";
import { IDepA } from "./IDepA";
import { IDepB } from "./IDepB";
import { IDepC } from "./IDepC";
import { ConcreteA } from "./ConcreteA";
import { ConcreteB } from "./ConcreteB";
import { ConcreteC } from "./ConcreteC";

const container = new Container({
  // defaultScope: "Singleton",
});

// Service A will be a Singleton - a single instance across injections.
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();

// Service B will be a transient (Default) - a new instance for each injection.
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope();

// Service C will be a Singleton for the duration of a network request.
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inRequestScope();

export default container;
