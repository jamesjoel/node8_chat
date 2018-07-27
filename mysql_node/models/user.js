var con = require("../config/connect");

module.exports.select=function(cb){
	con.connect(function(err){
		con.query("SELECT * FROM user",cb);
	});
}