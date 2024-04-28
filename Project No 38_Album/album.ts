function album(artist: string, album_title: string) {
  return {
    artist: artist,
    album_title: album_title,
  };
}

function album2(artist: string, album_title: string, album_tracks: number) {
  return {
    artist: artist,
    album_title: album_title,
    album_tracks: album_tracks,
  };
}

console.log(album("Kenny", "Me And My Nephew"));
console.log(album("Hennery", "My Queen's Life"));
console.log(album2("Ceal", "Lost better Got Majestic", 30));



