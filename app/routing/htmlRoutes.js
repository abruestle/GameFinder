
var path = require("path");

function expressify(app){
	//home url rewrites
		app.get("/", function(req, res) {
		 res.sendFile(path.join(__dirname, "/../public/home.html"));
		});

		app.get("/home", function(req, res) {
		 res.sendFile(path.join(__dirname, "/../public/home.html"));
		});

		app.get("/html/home", function(req, res){
		 res.sendFile(path.join(__dirname, "/../public/home.html"));
		})

	//Survey url reroutes
		app.get("/add", function(req, res) {
		 res.sendFile(path.join(__dirname, "/../public/survey.html"));
		});

		app.get("/html/add", function(req, res) {
		 res.sendFile(path.join(__dirname, "/../public/survey.html"));
		});

		app.get("/survey", function(req, res) {
		 res.sendFile(path.join(__dirname, "/../public/survey.html"));
		});

}

module.exports = expressify;