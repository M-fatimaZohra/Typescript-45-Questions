"use strict";
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
//EQUALITY
// true
let myName = 'fatima zohra';
console.log("if myName == 'fatima zohra' is true");
console.log(myName == "fatima zohra");
console.log('\n');
// false
console.log("if myName == 'hania' is false");
console.log(myName == "hania");
console.log('\n');
//INEQUALITY
// true
let myAge = '16';
console.log("if myAge !== '17' is true");
console.log(myAge !== '17');
console.log('\n');
// false
console.log("if myAge !== '16' is false");
console.log(myAge !== '16');
console.log('\n');
// • Tests using the lower case function
// true
let fruitIlike = 'BANANA';
console.log("if fruitIlike == 'banana' is true");
console.log(fruitIlike.toLowerCase() === 'banana');
console.log('\n');
//false
console.log("if fruitIlike == 'BANANA' is false");
console.log(fruitIlike.toLowerCase() === 'BANANA');
console.log('\n');
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//1 EQUALITY
// true
let number = 12;
console.log("if number === '12' is true");
console.log(number === 12);
console.log('\n');
//false
console.log("if number === '11' is false");
console.log(number === 11);
console.log('\n');
//2 INEQUALITY
//true
console.log("if number !== '11' is true");
console.log(number !== 11);
console.log('\n');
//false
console.log("if number !== '12' is false");
console.log(number !== 12);
console.log('\n');
//3 GREATER THAN
//true
console.log("if number > '11' is true");
console.log(number > 11);
console.log('\n');
//false
console.log("if number > '13' is false");
console.log(number > 13);
console.log('\n');
//4 LESS THAN
//true
console.log("if number < '13' is true");
console.log(number < 13);
console.log('\n');
//false
console.log("if number < '11' is false");
console.log(number < 11);
console.log('\n');
//5 GREATER THAN & EQUALTO
//true
console.log("if number >= '11' is true");
console.log(number >= 11);
console.log('\n');
//false
console.log("if number >= '13' is false");
console.log(number >= 13);
console.log('\n');
//6 LESS THAN & EQUALTO 
//true
console.log("if number <= '13' is true");
console.log(number <= 13);
console.log('\n');
//false
console.log("if number <= '11' is false");
console.log(number < 11);
console.log('\n');
// • Tests using "and" and "or" operators
// AND
// true
let favoriteColor1 = 'black';
let favoriteColor2 = 'red';
console.log("if favoriteColor1 == 'black' && favoriteColor2 == 'red' are true");
console.log(favoriteColor1 == 'black' && favoriteColor2 == 'red');
console.log('\n');
// false
console.log("if favoriteColor1 == 'white' && favoriteColor2 == 'cyan' are false");
console.log(favoriteColor1 == 'white' && favoriteColor2 == 'cyan');
console.log('\n');
// OR
// true
let favortedress = 'Ball Gown';
let favoriteEra = 'Victorian Era ';
console.log("if favortedress == 'Ball Gown' || favoriteEra == 'Victorian Era'are or any one is  true");
console.log(favortedress == 'Ball Gown' || favoriteEra == 'Victorian Era');
console.log('\n');
// false
console.log("if favortedress == 'gothic dress' || favoriteEra =='Dark Age' are false");
console.log(favortedress == 'gothic dress' || favoriteEra == 'Dark Age');
console.log('\n');
// • Test whether an item is in a array
let fruits = ['apple', 'mango', 'banana', 'orange'];
let findFruit = 'orange';
console.log("if 'orrange' exist in fruits is true");
console.log(fruits.includes(findFruit));
console.log('\n');
//• Test whether an item is not in a array
let fruit = ['apple', 'mango', 'banana', 'orange'];
let find = 'grapes';
console.log("if 'grapes' exist in fruit is false");
console.log(fruit.includes(find));
console.log('\n');
