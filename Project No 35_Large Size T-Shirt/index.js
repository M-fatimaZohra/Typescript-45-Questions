"use strict";
function make_shirt(size = `Large`, message = '"I LOVE TYPESCRIPT!"') {
    console.log(`print ${message} on ${size} size T-shirt`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', '"I LOVE HTML!"');
make_shirt('Extra Small', '"I LOVE CSS!"');
make_shirt('Extra Large', '"I LOVE C++!"');
