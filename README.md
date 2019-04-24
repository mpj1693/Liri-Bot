# Liri
## LIRI Bot for Week #10 Homework

### About

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### How it works

#### Bands-In-Town

![Psychic-Game-Screenshot1](assets/images/capture1.PNG)

`node liri.js concert-this <insert artist name>`

This will show the following information about the song in your terminanl/bash window

- Venue of the concert
- Location of the concert
- Date of the concert


#### Spotify

![Psychic-Game-Screenshot1](assets/images/capture2.PNG)

`node liri.js spotify-this-song <insert song title>`

This will show the following information about the song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from


![Psychic-Game-Screenshot1](assets/images/capture5.PNG)

If no song is provided then your program will default to "The Sign" by Ace of Base


#### Movies

![Psychic-Game-Screenshot1](assets/images/capture3.PNG)

`node liri.js movie-this <insert movie title>`

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Metascore of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.


![Psychic-Game-Screenshot1](assets/images/capture6.PNG)

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


#### Do What It Says

![Psychic-Game-Screenshot1](assets/images/capture4.PNG)

`node liri.js do-what-it-says`

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Right now it will run `spotify-this-song` for "I Want it That Way,".

Feel free to change the text in that document to test out the feature for other commands.


### Authors

Manav Patel
