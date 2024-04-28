"use strict";
function describe_city(city, country = "JAPAN") {
    console.log(`${city} is the city which is situated in ${country}`);
}
describe_city(`Hiroshima`);
describe_city(`Tokyo`);
describe_city(`Jakarta`, `INDONESIA`);
