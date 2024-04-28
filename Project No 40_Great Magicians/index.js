"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Denney', 'Hannes', 'Sam', 'Arain'];
function summonMagicians() {
    return magicians;
}
magicians = summonMagicians();
console.log(summonMagicians());
let phrases = "Welcome To The Great Magician";
function makeThemMGreat() {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${phrases} ${magicians[i]}`;
    }
}
makeThemMGreat();
console.log(magicians);
