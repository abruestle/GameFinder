// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./apiRoutes");
var htmlRoutes = require("./htmlRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);

// Star Wars Characters (DATA)
// =============================================================
var games = [
  {
    routeName: "pathfinder",
    name: "Pathfinder",
    type: "Tabletop RPG",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: []
  },
  {
    routeName: "game1",
    name: "Game 1",
    type: "Tabletop RPG",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [4, 3, 2, 2, 1, 5, 5, 5, 2, 5]
  },
  {
    routeName: "game2",
    name: "Game 2",
    type: "Tabletop RPG",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [2, 5, 1, 1, 1, 3, 3, 5, 5, 2]
  },
  {
    routeName: "game3",
    name: "Game 3",
    type: "Card Game",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [4, 2, 2, 2, 5, 2, 1, 2, 1, 1]
  },
  {
    routeName: "game4",
    name: "Game 4",
    type: "Card Game",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [1, 4, 1, 4, 3, 5, 5, 2, 1, 4]
  },
  {
    routeName: "game5",
    name: "Game 5",
    type: "Card Game",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [1, 5, 5, 5, 3, 1, 3, 1, 2, 1]
  },
  {
    routeName: "game6",
    name: "Game 6",
    type: "Card Game",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [3, 4, 2, 1, 2, 5, 3, 3, 1, 5]
  },
  {
    routeName: "game7",
    name: "Game 7",
    type: "Card Game",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [5, 2, 1, 1, 1, 4, 3, 3, 1, 5]
  },
  {
    routeName: "game8",
    name: "Game 8",
    type: "Card Game",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [1, 5, 3, 3, 3, 3, 2, 5, 2, 3]
  },
  {
    routeName: "game9",
    name: "Game 9",
    type: "Card Game",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [2, 3, 5, 3, 4, 4, 2, 2, 2, 1]
  },
  {
    routeName: "game10",
    name: "Game 10",
    type: "Card Game",
    image: "",
    description: "",
    cost: 0,
    console: "none",
    tags: [],
    survey: [3, 2, 5, 1, 5, 3, 3, 3, 1, 4]
  }
  
];

var players = [
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Tabletop RPG",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [1, 4, 4, 3, 1, 5, 1, 5, 5, 5]
  },
  {
    routeName: "bob",
    name: "Bob",
    favoriteType: "Board Game",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [3, 2, 4, 1, 4, 2, 1, 5, 5, 2]
  },
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Card Game",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [5, 4, 5, 2, 5, 2, 4, 2, 2, 4]
  },
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Video Game",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [4, 1, 5, 5, 1, 1, 5, 5, 5, 1]
  },
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Board Game",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [3, 4, 1, 3, 2, 5, 2, 3, 1, 3]
  },
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Card Game",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [4, 5, 2, 3, 3, 2, 4, 4, 1, 2]
  },
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Video Game",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [2, 3, 1, 3, 5, 4, 5, 3, 5, 3]
  },
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Card Game",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [4, 1, 1, 1, 4, 2, 4, 4, 3, 1]
  },
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Tabletop RPG",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [3, 2, 4, 4, 5, 1, 1, 1, 4, 4]
  },
  {
    routeName: "alice",
    name: "Alice",
    favoriteType: "Tabletop RPG",
    image: "",
    description: "",
    consoles: [],
    tags: [],
    survey: [3, 2, 2, 3, 3, 4, 1, 2, 3, 5]
  }
  
];

//functions
  function compare(arr1, arr2) {
    // takes array and compares it to games or players
      var scal = 0;
      for (var i = 0; i < arr1.length; i++) {
        scal = scal + Math.abs(arr1[i] - arr2[i]);
      }
      return scal;
  }

  function compareToGame(arr1) {
    //takes an array and finds best match - or matches - in Games
      var matches = [];
      var matchDistance = 100;
      //Finds if each game should be added to matches or replace matches, updating matchDistance if replacing.
      for (var i = 0; i < games.length; i++) {
        var distance = compare(arr1, games[i].survey);
        if(matchDistance > distance) {
          matches = [games[i]];
          matchDistance = distance;
        } else if(matchDistance == distance) {
          matches.push(games[i]);
        }
      }
      return matches;
  }

  // function CompareToPlayers(arr1) {
  //   //takes an array and finds best match - or matches - in Games
  //     var matches = [];
  //     var matchDistances = [100,100,100,100,100];
  //     //Finds if each game should be added to matches or replace matches, updating matchDistance if replacing.
  //     for (var i = 0; i < players.length; i++) {
  //       var distance = compare(arr1, players[i].survey);
  //       if(matchDistance > distance) {
  //         matches = [players[i]];
  //         matchDistance = distance;
  //       } else if(matchDistance == distance) {
  //         matches.push(players[i]);
  //       }
  //     }
  //     return matches;
  // }
// Routes
// =============================================================




// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
