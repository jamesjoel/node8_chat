var express=require("express");
var app=express();

app.set('view engine', 'ejs');

app.use(require("./config/routes"));


app.listen(process.env.PORT || 3000,function(){
console.log("server running properly...");
});

