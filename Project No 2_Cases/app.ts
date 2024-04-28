import { log } from "console";

let toPerson:string= "Samina";
let person =toPerson.toUpperCase();
let person2 =toPerson.toLowerCase();
let person3 =toPerson.replace(/\bw/g,c => c.toLocaleUpperCase());
;
;

console.log(person);
console.log(person2);
console.log(person3);