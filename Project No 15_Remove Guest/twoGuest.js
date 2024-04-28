"use strict";
console.log('--------------------------------------------');
let myGuests = ['Muntaha', 'Sabiha', 'Umama']; //Sana[1] would not be able to come
var invitaton1 = `\t \t Dear ${myGuests[0]}\n 
\tI would like to invite you on \n
\t \t Friendly Dinner \n
\t at My house at 10:00pm tommrow\n
\t i hope you accept my Invitation\n
\t\t\t\t Thank You
\t\t\t\tYour Friend
\t\t\t\tFatima Zohra\n `;
console.log(invitaton1);
console.log('--------------------------------------------');
var invitaton1 = `\t \t Dear ${myGuests[1]}\n 
\tI would like to invite you on \n
\t \t Friendly Dinner \n
\t at My house at 10:00pm tommrow\n
\t i hope you accept my Invitation\n
\t\t\t\t Thank You
\t\t\t\tYour Friend
\t\t\t\tFatima Zohra\n `;
console.log(invitaton1);
console.log('--------------------------------------------');
var invitaton1 = `\t \t Dear ${myGuests[2]}\n 
\tI would like to invite you on \n
\t \t Friendly Dinner \n
\t at My house at 10:00pm tommrow\n
\t i hope you accept my Invitation\n
\t\t\t\t Thank You
\t\t\t\tYour Friend
\t\t\t\tFatima Zohra\n `;
console.log(invitaton1);
console.log('--------------------------------------------');
console.log(`Our Guest Sana wouidn't be able to come at dinner \n`);
console.log(`We have now bigger table so we are inviting more Guest \n`);
let newGuests = ['Anita', 'Shanaya'];
newGuests.push('Labreza');
console.log('--------------------------------------------');
var invitaton2 = `\t \t Dear ${newGuests[0]}\n 
\tI would like to invite you on \n
\t \t Friendly Dinner \n
\t at My house at 10:00pm tommrow\n
\t i hope you accept my Invitation\n
\t\t\t\t Thank You
\t\t\t\tYour Friend
\t\t\t\tFatima Zohra\n `;
console.log(invitaton2);
console.log('--------------------------------------------');
var invitaton2 = `\t \t Dear ${newGuests[1]}\n 
\tI would like to invite you on \n
\t \t Friendly Dinner \n
\t at My house at 10:00pm tommrow\n
\t i hope you accept my Invitation\n
\t\t\t\t Thank You
\t\t\t\tYour Friend
\t\t\t\tFatima Zohra\n `;
console.log(invitaton2);
console.log('--------------------------------------------');
var invitaton2 = `\t \t Dear ${newGuests[2]}\n 
\tI would like to invite you on \n
\t \t Friendly Dinner \n
\t at My house at 10:00pm tommrow\n
\t i hope you accept my Invitation\n
\t\t\t\t Thank You
\t\t\t\tYour Friend
\t\t\t\tFatima Zohra\n `;
console.log(invitaton2);
console.log('--------------------------------------------');
let guest = ['Muntaha\n', 'Sabiha\n', 'Umama\n', 'Anita\n', 'Shanaya\n', 'Labreza \n'];
console.log(`Sorry, Due to some circumstances our dinning table is only avalible for only two people \n`);
while (guest.length > 2) {
    let lastGuest = guest.pop();
    console.log(`we apoligize to ${lastGuest} for taking the invitation from you of dinner\n `);
}
for (let i = 0; i < guest.length; i++) {
    let yes = guest[i];
    console.log(`Dear ${yes} we are still looking foward to enjoy dinner with you`);
}
guest.pop(); //removes 0
guest.pop(); //removes 1
console.log("updated guest list" + guest); // empty
