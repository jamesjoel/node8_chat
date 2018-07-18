var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.set('view engine', 'ejs');

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));

var arr = {};

var user = "";

app.get("/", function(req, res){
	res.render("home");
});

app.post("/", function(req, res){
	// arr.push(req.body.name);
	user = req.body.name;
	req.session.name = req.body.name;
	res.redirect("/chat");
});

function back(req, res, next)
{
	if(! req.session.name){
		res.redirect("/");
		return;
	}
	next();
}


app.get("/chat", back, function(req, res){
	res.render("chat");
});


io.on("connection", function(socket){
	arr[user]=socket.id;
	console.log(arr);
	console.log(socket.id);
	io.emit("online", arr);

	io.on("message", function(data){
		console.log(data);
	});

});



server.listen(3000, function(){
	console.log("Server Running");
});
