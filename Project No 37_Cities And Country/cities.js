"use strict";
function city_country(city, country) {
    let result = city + country;
    return result;
}
let g = city_country(`Paris,`, `France`);
let h = city_country(`Karachi,`, `Pakistan`);
let i = city_country(`Dubai,`, `UAE`);
console.log(g);
console.log(h);
console.log(i);
