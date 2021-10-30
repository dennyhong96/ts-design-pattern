import readline, { ReadLine } from "readline";

// Template class in place of an interface
export class ProfileConfiguration {
  protected _readline: ReadLine;
  constructor() {
    this._readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  public async start(): Promise<any> {
    // Template class outlines the 4 steps needs to be done.
    // This is not possible if we use interface
    await this.configureAccountSecurity();
    await this.configureEmailIntegration();
    await this.configureSupportMethod();
    await this.configurePaymentMethod();
    this._readline.close();
  }
  protected async configureAccountSecurity(): Promise<any> {
    throw new Error("Method not implemented");
  }
  protected async configureEmailIntegration(): Promise<any> {
    throw new Error("Method not implemented");
  }
  protected async configureSupportMethod(): Promise<any> {
    throw new Error("Method not implemented");
  }
  protected async configurePaymentMethod(): Promise<any> {
    throw new Error("Method not implemented");
  }
}

// Concrete children classes implement the 4 steps outlined in the template class
export class BasicPlanProfileConfiguration extends ProfileConfiguration {
  public async start(): Promise<any> {
    console.log("Configurating basic plan profile.");
    super.start();
  }
  protected async configureAccountSecurity(): Promise<any> {
    console.log("Click here to enter a security question");
  }
  protected async configureEmailIntegration(): Promise<any> {
    console.log("Click here to setup email server");
  }
  protected async configureSupportMethod(): Promise<any> {
    console.log("Click here to create a 'Contact us' page");
  }
  protected async configurePaymentMethod(): Promise<any> {
    console.log("Click here to setup Paypal");
  }
}

export class PremiumPlanProfileConfiguration extends ProfileConfiguration {
  public async start(): Promise<any> {
    console.log("Configurating premium plan profile.");
    super.start();
  }
  protected async configureAccountSecurity(): Promise<any> {
    return new Promise<void>((resolve) => {
      this._readline.question(
        "What security method would you like to use?\n1. Security Question\n2. Two Factor Authentication\n",
        (answer: string) => {
          if (parseInt(answer) === 1) {
            console.log("Click here to enter a security question");
          } else if (parseInt(answer) === 2) {
            console.log("Click here to setup your 2FA");
          }
          resolve();
        }
      );
    });
  }
  protected async configureEmailIntegration(): Promise<any> {
    console.log("Click here to setup MailChimp");
  }
  protected async configureSupportMethod(): Promise<any> {
    console.log("Click here to setup Intercom");
  }
  protected async configurePaymentMethod(): Promise<any> {
    return new Promise<void>((resolve) => {
      this._readline.question(
        "What payment method would you like to use?\n1. Stripe\n2. Paypal\n",
        (answer: string) => {
          if (parseInt(answer) === 1) {
            console.log("Click here to setup Stripe");
          } else if (parseInt(answer) === 2) {
            console.log("Click here to setup Paypal");
          }
          resolve();
        }
      );
    });
  }
}
