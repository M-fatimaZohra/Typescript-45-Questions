"use strict";
function placeOrderForSandwich(order) {
    console.log("ORDER");
    console.log(`${order}`);
    console.log("SUMMARY");
    console.log(`You have ordered sandwitch with ${order}\n`);
}
placeOrderForSandwich(["Ketchep", "Beef Patty", "cheese"]);
placeOrderForSandwich(["Ketchep", "Mustard", "Zinger", "Cheese"]);
placeOrderForSandwich(["Ketchep", "Onions", "Egg", "Lettuce", "Tomato"]);
