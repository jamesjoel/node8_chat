var express = require("express");
var router = express.Router();


router.use('/', require('../controller/home')); 


module.exports=router;