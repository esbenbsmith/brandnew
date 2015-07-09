var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var _ = require("underscore");

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

var users= [
{
	id:1,
	username: "ebsmith",
	firstname: "Esben",
	lastname: "Smith",
	age:23
},
{
	id:2,
	username: "JJ",
	firstname: "Joe",
	lastname: "Johnston",
	age: 35

}

];

app.get("/users", function (req, res) {
	res.json(users);
});

app.get("/users/:id", function (req, res) {
	res.json(users);
});


app.post("/users",function (req, res) {
	var newUser = req.body;
	users.push(newUser)
	res.json(users)
});

app.put("/users/:id", function (req, res) {
	
	var targetId = parseInt(req.params.id);

	var foundUser = _.findWhere(users, {id:targetId});

	foundUser.username = req.body.username;

	foundUser.firstname = req.body.firstname;

	foundUser.lastname = req.body.lastname;

	foundUser.age = req.body.age;



	res.json(targetId);

});

app.delete("/users/:id", function (req, res) {

	var targetId = parseInt(req.params.id);

	var foundUser = _.findWhere(users, {id:targetId});

	users.splice(users.indexOf(foundUser), 1);

	

	res.json(users)
});




app.listen(3000);
