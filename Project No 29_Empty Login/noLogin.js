"use strict";
let user_name = [
    "anan1864.7",
    "bon.bon.dee3",
    "asania456_t",
    "burin222111",
    "admin",
];
if (user_name.includes("admin")) {
    console.log(`grettings to Admin, like to observe reports\n`);
}
for (let i = 0; i < user_name.length; i++) {
    if (user_name[i] == "admin") {
        continue;
    }
    console.log(`Hi '${user_name[i]}'! Happy To See You Again \n`);
}
for (let i = 0; i < user_name.length; i++) {
    user_name.pop();
    user_name.pop();
    user_name.pop();
}
if (user_name.length === 0) {
    console.log('find! more users!!!');
}
