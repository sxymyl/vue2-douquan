var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = require("./router");

app.use(bodyParser.urlencoded({
	extended: true
}));


app.use("/", router);


app.listen(3000, function() {
	console.log("启动了:3000")
})
