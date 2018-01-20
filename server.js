// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);


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
