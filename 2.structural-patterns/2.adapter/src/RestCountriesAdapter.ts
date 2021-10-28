import { ICountry } from "./ICountry";
import { ICountriesRepository } from "./ICountriesRepository";
import { RestCountriesClient } from "./RestCountriesClient";
import { ContinentType } from "./CountriesRepository";

// An adapter that bridge the gap between a 3rd party api client and repository contract
export class RestCountriesAdapter implements ICountriesRepository {
  // Get a instance of RestCountriesClient (dependency inversion principle)
  // so we can manipulate the data provided to the client and returned from the client
  constructor(private _restCountriesClient: RestCountriesClient) {}

  private countryDataToCountry(countryData: any): ICountry {
    return {
      name: countryData?.name?.common ?? "",
      capital: countryData?.capital?.[0] ?? "",
      currency: countryData?.currencies
        ? Object.keys(countryData.currencies)?.[0] ?? ""
        : "",
    };
  }

  private countriesDataToCountries(countriesData: any[]): ICountry[] {
    return countriesData.map((countryData) =>
      this.countryDataToCountry(countryData)
    );
  }

  async all(): Promise<ICountry[]> {
    const countriesData = await this._restCountriesClient.getAll();
    return this.countriesDataToCountries(countriesData);
  }

  async allByContinent(continent: ContinentType): Promise<ICountry[]> {
    let region = "";
    if (
      continent === ContinentType.SouthAmerica ||
      continent === ContinentType.NorthAmerica
    ) {
      region = "Americas";
    } else {
      region = ContinentType[continent];
    }
    const countriesData = await this._restCountriesClient.getByRegion(region);
    let results = countriesData;
    if (continent === ContinentType.NorthAmerica) {
      results = countriesData.filter(
        (countryData) => countryData.subregion === "Northern America"
      );
    } else if (continent === ContinentType.SouthAmerica) {
      results = countriesData.filter(
        (countryData) => countryData.subregion === "South America"
      );
    }
    return this.countriesDataToCountries(results);
  }

  async allByCurrency(currency: string): Promise<ICountry[]> {
    const countriesData = await this._restCountriesClient.getByCurrency(
      currency
    );
    return this.countriesDataToCountries(countriesData);
  }
}
