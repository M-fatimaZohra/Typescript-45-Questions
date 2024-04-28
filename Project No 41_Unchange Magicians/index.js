"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Denney', 'Hannes', 'Sam', 'Arain'];
// copy orignal array
function orignalArr(ogAr) {
    return ogAr.slice();
}
let orignalMagicians = orignalArr(magicians);
// custom array 
let phrases = "Welcome To The Great Magician";
function makeThemMGreat(ogAr) {
    for (let i = 0; i < ogAr.length; i++) {
        orignalMagicians[i] = `${phrases} ${orignalMagicians[i]}`;
    }
    console.log(orignalMagicians);
}
console.log('custom message');
makeThemMGreat(magicians);
console.log('orignal message');
console.log(orignalArr(magicians));
