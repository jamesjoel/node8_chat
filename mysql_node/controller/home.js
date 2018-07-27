var express = require("express");
var router = express.Router(); 
var user = require("../models/user");


router.get("/", function(req,res){
	user.select(function(err, result){
		console.log(result);

		result=JSON.parse(JSON.stringify(result));


		var pagedata={pagename:"home/index",title:"home page", data : result};
		res.render("layout",pagedata);
	});
});


module.exports=router;