
var path = require("path");
var games = require("../data/games");
var players = require("../data/players");

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
      console.log("Comparing...");
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
      console.log("Compared. " + JSON.stringify(matches));
      return matches;
  }

function expressify(app){

  // Get all players
  app.get("/api/all", function(req, res) {
    res.json(games);
  });

  // Search for Specific Game (or all games) - provides JSON
    app.get("/api/games/:games?", function(req, res) {
      var chosen = req.params.games;
      console.log("Looking for "+chosen);

      if (chosen) {
        console.log(chosen);

        for (var i = 0; i < games.length; i++) {
          if (chosen === games[i].routeName) {
            return res.json(games[i]);
          }
        }
        return res.json(false);
      }
      return res.json(games);
    });

  // Search for Specific Player (or all players) - provides JSON
    app.get("/api/players/:players?", function(req, res) {
      var chosen = req.params.players;

      console.log(chosen);
      if (chosen) {
        console.log(chosen);

        for (var i = 0; i < players.length; i++) {
          if (chosen === players[i].routeName) {
            return res.json(players[i]);
          }
        }
        return res.json(false);
      }
      return res.json(players);
    });

  // Search for Specific Game (or all games) - provides JSON
    app.get("/api/games/:games?", function(req, res) {
      var chosen = req.params.games;

      if (chosen) {

        for (var i = 0; i < games.length; i++) {
          if (chosen === games[i].routeName) {
            console.log(games[i]);
            return res.json(games[i]);
          }
        }
        return res.json(false);
      }
      return res.json(games);
    });

  // Create New Players - takes in JSON input
    app.post("/api/newplayer", function(req, res) {
      // console.log("api: newplayer");
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body-parser middleware
      var newplayer = req.body;
      // Using a RegEx Pattern to remove spaces from newPlayer
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      newplayer.routeName = newplayer.name.replace(/\s+/g, "").toLowerCase();

      console.log(newplayer);
      // console.log(newplayer);
      // console.log(players);
      var newMatch = compareToGame(newplayer.survey);
      //players.push(newplayer);
      players.push(newplayer);

      res.json(newMatch);

    });

  // Create New Games - takes in JSON input
    app.post("/api/newgame", function(req, res) {
      console.log("api: newgame");
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body-parser middleware
      var newgame = req.body;
      // Using a RegEx Pattern to remove spaces from newGame
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      newgame.routeName = newgame.name.replace(/\s+/g, "").toLowerCase();

      console.log(newgame);
      var newMatch = compareToGame(newgame.survey);

      games.push(newgame);

      res.json(newMatch);
    });

  // app.get("/api/route2", function(req, res){
  //   res.end();
  // })



}

module.exports = expressify;


