"use strict";
function album(artist, album_title) {
    return {
        artist: artist,
        album_title: album_title,
    };
}
function album2(artist, album_title, album_tracks) {
    return {
        artist: artist,
        album_title: album_title,
        album_tracks: album_tracks,
    };
}
console.log(album("Kenny", "Me And My Nephew"));
console.log(album("Hennery", "My Queen's Life"));
console.log(album("Sabrina", "Why To Obey You"));
console.log(album2("Ceal", "Lost better Got Majestic", 30));
