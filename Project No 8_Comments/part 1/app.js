"use strict";
// Race: "26/2/2024"
//discription: the program here is about runners here rules are like this 
//1. run at least 450m to win
//2. if run more than 450m you got GOLD EAGLE medal
//3. if you don't even run you are eliminated.  
function runners(player, distance) {
    if (distance <= 450 && distance > 0) {
        console.log(player + 'WINS!');
    }
    else if (distance <= 0) {
        console.log(player + 'not even run');
    }
    else {
        console.log(player + 'GOLD EAGLE!');
    }
}
runners(" malen: ", 0);
runners(" henery: ", 430);
runners(" khalid: ", 700);
