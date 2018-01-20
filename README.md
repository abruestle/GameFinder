# GameFinder
Finds games based on a survey; uses Node, MySQL, and Express

## People can either add themselves as a player, or they can add games.


## Search
Search for a game or player you know of, with all their information shown.
Uses API Routing to get to the Json.

## Survey
### Player
* When a player enters a survey, their best matching game is shown, and they are added to the database of players. In the future, the closest 5 players will also be shown, as they could play with the user.


## Current fake data
Currently the API is mostly full of fake data instead of real games and players. If you would like to search for names, select from these:
* Games: "Pathfinder", "Game 1", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6", "Game 7", "Game 8", "Game 9", "Game 10"
* Players: "Alice", "Bob"


To Do:
[x] Searching for players or games
[x] Survey creation for adding a player
[ ] Survey creation for adding a game
[ ] Validate adding
[x] Entered player calculates best game match for them
[x] Shows Results
[ ] Show Results in bootstrap
[ ] Entered player calculates best game matches if tied

[ ] Entered player calculates best 5 players to play with based on how close they match
[ ] Entered player calculates matches with a number of other players (number either entered in or based on how much they like multiplayer games...or how much their resulting game is multiplayer)
[ ] Entered game brings up which players would most like to play it.
[ ] Max cost willing to spend and cost of games is calculated - if the player can't afford it, it is not included.
[ ] Game brings up info from Steam API if a video game.
[ ] Survey results calculated based off tags, so video games can be automatically generated.
[ ] See if there are APIs for Card Games, Tabletop Games, and Board Games, similarly calculate as with Steam.