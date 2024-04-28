"use strict";
let currentUsernames = [
    "rani.tosi12",
    "hami234rs",
    "rozana23",
    "kanai2312",
    "endera1212",
];
let newUsernames = [
    "hanai234",
    "HAMI234RS",
    "amari123",
    "suna212",
    "endera1212",
];
newUsernames.forEach((newusers) => {
    let signIn = currentUsernames.some((currentuser) => currentuser.toLowerCase() === newusers.toLowerCase());
    switch (true) {
        case signIn:
            console.log(`${newusers} is not avalible `);
            break;
        default:
            (console.log(`welcome ${newusers}! You are sucessfully sign In`));
    }
});
// if (
//   ) {
//     console.log(`${newusers} is not avalible `);
//   }
//   else{console.log(`welcome to ${newusers}!`);
//   }
