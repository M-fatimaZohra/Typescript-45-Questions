"use strict";
let places = newFunction();
console.log(places); //orignal order
//'---------------------------------------------------------------------------------------------'
let orderPlace = places.sort();
console.log(orderPlace); //Alphabetical order
//'---------------------------------------------------------------------------------------------'
places = newFunction();
console.log(places); //orignal order
//'---------------------------------------------------------------------------------------------'
let reverseOrderAlphabaticallyReverse = places.sort().reverse();
console.log(reverseOrderAlphabaticallyReverse); //Reverse in alphabatically order
//'---------------------------------------------------------------------------------------------'
places = newFunction();
console.log(places); //orignal order
//'---------------------------------------------------------------------------------------------'
let reverseOrder = places.reverse();
console.log(reverseOrder); // Reverse order
let reverseOrderAgain = places.reverse();
console.log(reverseOrderAgain); // Reverse 'Reverse order'
//"-----------------------------------------------------------------------------------------------"
places.sort();
console.log(places);
places.sort().reverse();
console.log(places);
function newFunction() {
    return ['Do darya', 'Tokyo', 'Istanbul', 'Yamen', 'Musée du Louvre'];
}
