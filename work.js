class MediaPlaylist {
  constructor (artist, playing, playlist, duration){
    this._artist = artist;
    this._playing = playing;
    this._playlist = playlist;
    this._duration = duration;
  }
  playing(){
    console.log ('this song is by ' + this._artist + ' it is called  ' + this._playing + ' and it lasts ' + this._duration);
  }
}
// good here so far

class Podcast extends MediaPlaylist{
  constructor(artist, playing, playlist, duration, name){
    super(artist, playing, playlist, duration);
    this._name = name;
  }
  getName(){
    console.log('this podcast is named ' + this._name + ' and will last ' + this._duration)
  }
  playing(){
    console.log ('this podcast is playing ' + this._playing);
}
}


class Movie extends MediaPlaylist{
  constructor(artist, playing, playlist, duration, rating, name){
    super(artist, playing, playlist, duration);
    this._name = name;
    this._rating = rating;
  }
  playing(){
    console.log ('this movie is ' + this._name + ' and it lasts ' + this._duration + ' the ratings on Rotten Tomatoes are ' + this._rating);
}
 }
//second class working

let firstsong = new MediaPlaylist("Queen", "We Will Rock You", "News of the World", "2:10min");
let secondsong = new MediaPlaylist("Shakira", "Chantaje", "Maluma", "3:19min");
firstsong.playing();

let firstpodcast = new Podcast("Yello", "Full of Sky", "Jones", "3:00min", "You Are Great");
firstpodcast.playing();
firstpodcast.getName();
//artist is not defined

let firstmovie = new Movie("Celine Dion", "Yes", "Sure", "3hr:15min", "89%", "Titanic");
firstmovie.playing();
