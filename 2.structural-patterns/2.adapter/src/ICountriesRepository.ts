import { ContinentType } from "./CountriesRepository";
import { ICountry } from "./ICountry";

export interface ICountriesRepository {
  all(): Promise<ICountry[]>;
  allByContinent(continent: ContinentType): Promise<ICountry[]>;
  allByCurrency(currency: string): Promise<ICountry[]>;
}
