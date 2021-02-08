import { City } from './city'

class Country implements City {
    name = "miami";
    capital = "dc"
}

let cou = new Country()
cou.capital
cou.name