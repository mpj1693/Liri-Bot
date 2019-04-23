require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var axios = require("axios");

var moment = require("moment")

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var parameter = process.argv.slice(3).join(" ");


switch (command) {
  case "concert-this":
    bands(parameter);
    break;
  case "spotify-this-song":
  if(parameter == false){
    parameter = "The Sign"
    spotifyThis(parameter)
  }else {
    spotifyThis(parameter);
  }
    break;
  case "movie-this":
  if(parameter == false){
    parameter = "Mr. Nobody"
    omdb(parameter)
  }else {
    omdb(parameter);
  }
    break;
  case "do-what-it-says":
    random(parameter);
    break;
  default:
    console.log("plz enter a valid command")
}

function omdb(parameter) {

  var queryUrl = "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl).then(
    function (response) {
      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB rating: " + response.data.imdbRating);
      console.log("Metascore: " + response.data.Metascore);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    }
  )
}

function bands(parameter) {

  var queryUrl = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(
    function (response) {
      console.log("Venue:  " + response.data[1].venue.name)
      console.log("Location:  " + (response.data[1].venue.city) + ", " + (response.data[1].venue.country))
      console.log("Date:  " + moment(response.data[1].datetime).format('MM/DD/YYYY'))
    }
  )

}

function spotifyThis(parameter) {

  spotify
    .search({
      type: 'track',
      query: parameter
    })
    .then(function (response) {
      var songInfo = response.tracks.items;
      console.log("Artist: " + songInfo[0].artists[0].name);
      console.log("Song Name: " + songInfo[0].name);
      console.log("Preview Link: " + songInfo[0].preview_url);
      console.log("Album: " + songInfo[0].album.name);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function random(parameter) {

  fs.readFile('random.txt', 'utf-8', function(err, parameter){
    if (err) throw err;

    console.log(typeof(parameter));

    parameter.replace(/\.\/+/, 'spotify-this-song');

    spotifyThis(parameter);

});

}

function random() {
  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    var dataArr = data.split(",");
    var command = dataArr[0];
    var thatWay = dataArr[1];

    switch (command) {
      case "concert-this":
        bands(thatWay);
        break;
      case "spotify-this-song":
        spotifyThis(thatWay)
        break;
      case "movie-this":
        omdb(thatWay);
        break;
    };
  })
}