import fs from "fs/promises";
import { ICountriesRepository } from "./ICountriesRepository";

import { ICountry } from "./ICountry";

export enum ContinentType {
  Africa = "Africa",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "NorthAmerica",
  SouthAmerica = "SouthAmerica",
}

export class CountriesRepository implements ICountriesRepository {
  async all(): Promise<ICountry[]> {
    return (
      await Promise.all(
        [
          ContinentType.Africa,
          ContinentType.Asia,
          ContinentType.Europe,
          ContinentType.NorthAmerica,
          ContinentType.SouthAmerica,
        ].map((continent) => {
          return this.allByContinent(continent);
        })
      )
    ).flat(1);
  }

  async allByContinent(continent: ContinentType): Promise<ICountry[]> {
    const string = await fs.readFile(this.continentToFileName(continent), {
      encoding: "utf-8",
    });
    const countries: ICountry[] = JSON.parse(string);
    return countries;
  }

  async allByCurrency(currency: string): Promise<ICountry[]> {
    const countries = await this.all();
    return countries.filter((country) => country.currency === currency);
  }

  private continentToFileName(continent: ContinentType) {
    const pathPrefix = "src/countries/";
    switch (continent) {
      case "Africa": {
        return `${pathPrefix}africa.json`;
      }
      case "Asia": {
        return `${pathPrefix}asia.json`;
      }
      case "Europe": {
        return `${pathPrefix}europe.json`;
      }
      case "SouthAmerica": {
        return `${pathPrefix}southamerica.json`;
      }
      case "NorthAmerica":
      default: {
        return `${pathPrefix}northamerica.json`;
      }
    }
  }
}
