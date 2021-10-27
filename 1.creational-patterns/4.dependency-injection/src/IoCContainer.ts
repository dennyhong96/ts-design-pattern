// Injectable constructor decorator
export function Injectable(name: string, dependencies: string[] = []) {
  const container = IoCContainer.instance;
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    container.register(name, dependencies, constructor);
  };
}

// IoC Container or DI Container
export class IoCContainer {
  private static _instance: IoCContainer = new IoCContainer();
  private _dependencies: { [key: string]: object } = {};

  private constructor() {
    if (IoCContainer._instance) {
      throw new Error(`You cannot instantiate IoCContainer with 'new'.`);
    }
    IoCContainer._instance = this;
  }

  public static get instance() {
    return IoCContainer._instance;
  }

  public register(name: string, dependencies: string[], implementation: any) {
    if (this._dependencies[name]) {
      throw new Error(`Dependency ${name} already exists.`);
    }
    const dependenciesImplementations =
      this.getDependenciesImplementations(dependencies);
    this._dependencies[name] = new implementation(
      ...dependenciesImplementations
    );
  }

  public resolve<T>(name: string): T {
    if (!this._dependencies[name]) {
      throw new Error(`Dependency ${name} does not exist.`);
    }
    return this._dependencies[name] as unknown as T;
  }

  private getDependenciesImplementations(names: string[]): object[] {
    return names.map((name) => this.resolve(name));
  }
}
