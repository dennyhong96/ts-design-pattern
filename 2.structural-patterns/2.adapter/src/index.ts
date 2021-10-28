import { ContinentType, CountriesRepository } from "./CountriesRepository";
import { RestCountriesAdapter } from "./RestCountriesAdapter";
import { RestCountriesClient } from "./RestCountriesClient";

// const countriesRepository = new CountriesRepository();
const countriesRepository = new RestCountriesAdapter(new RestCountriesClient());
async function main() {
  const eurCountries = await countriesRepository.allByCurrency("EUR");
  console.log("eurCountries", eurCountries);

  const asiaCountries = await countriesRepository.allByContinent(
    ContinentType.Asia
  );
  console.log("asiaCountries", asiaCountries);
}
main();

// async function main2() {
//   const restCountries = new RestCountriesClient();
//   const countries = await restCountries.getByRegion("Americas");
//   console.log(countries);
// }
// main2();
