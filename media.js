class MediaPlaylist {
  constructor (artist, playing, playlist, duration){
    this._artist = artist;
    this._playing = playing;
    this._playlist = playlist;
    this._duration = duration;
  }
  next(){
    console.log('This song plays ' + this.playing );
    playing()
    console.log('This playlist plays' + this.playlist);
    }
  }
// it's working here

class Podcasts extends MediaPlaylist {
  constructor(name, playing, playlist, duration){
    super(artist, playing, playlist, duration);
    this._name = name;
  }
  next(){
    console.log('The name is ' + this._name + 'duration is' + this.duration);
  playing()
  console.log('This playlist plays' + this.playlist);
  }
}
// new class is working, why is super not in red?

class Movies extends MediaPlaylist{
  constructor(rating, name, duration){
    super(artist, playing, playlist, duration);
    this._rating = rating;
    this._name = name;
  }
  next(){
    console.log('the name is' + this._name + 'duration is' + this._duration + 'and the rating is ' + this._rating);
    playing()
    console.log('This playlist plays'+ this._playlist);
  }
}
// this other class works as well

let artists = ["Shakira", "Beyonce", "Adele", "Rihanna"];
let playlists = ["No", "Halo", "Hello", "Umbrella"];
let songs = ["Gipsy", "Formation", "Somebody", "Rude"];

myartist = ('Shakira');

myartist.next();
//starts giving errors it says it's not a function??
