
var path = require("path");

function expressify(app){
  // Search for Specific Game (or all games) - provides JSON
    app.get("/api/games/:games?", function(req, res) {
      var chosen = req.params.games;

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

  // Create New Players - takes in JSON input
    app.post("/api/newplayer", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body-parser middleware
      var newplayer = req.body;
      // Using a RegEx Pattern to remove spaces from newPlayer
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      newplayer.routeName = newplayer.name.replace(/\s+/g, "").toLowerCase();

      console.log(newplayer);

      players.push(newplayer);

      res.json(newplayer);
    });

  // Create New Games - takes in JSON input
    app.post("/api/newgame", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body-parser middleware
      var newgame = req.body;
      // Using a RegEx Pattern to remove spaces from newGame
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      newgame.routeName = newgame.name.replace(/\s+/g, "").toLowerCase();

      console.log(newgame);

      games.push(newgame);

      res.json(newgame);
    });

  // app.get("/api/route2", function(req, res){
  //   res.end();
  // })


    // Get all players
    app.get("/api/all", function(req, res) {
      res.json(games);
    });

}

module.exports = expressify;


