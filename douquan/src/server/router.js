var express = require("express");
var router = express.Router();

var url = require("url");
var data = require("./data.js");


router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

router.get("/book", function(req, res) {


	res.json(200, data.data.book);

	res.json(200, data.book);


});

router.get("/game", function(req, res) {
	res.json(200, data.data.game);


});

router.get("/music", function(req, res) {
	res.json(200, data.data.music);

});

router.get("/movie", function(req, res) {
	res.json(200, data.data.movie);

});


router.get("/indexx", function(req, res) {
		res.json(200, data.myhello.myli);

	});
router.get("/CirClassb", function(req, res) {

	res.json(200, data.CirClassb);

});
router.get("/CirRecom", function(req, res) {

	res.json(200, data.CirRecom);

});
router.get("/CirJoin", function(req, res) {

	res.json(200, data.CirJoin);

});

router.get("/CirClassa", function(req, res) {

	res.json(200, data.CirClassa);

});
router.get("/CirClassc", function(req, res) {

	res.json(200, data.CirClassc);

});
router.get("/CirCreate", function(req, res) {

	res.json(200, data.CirCreate);

});
router.get("/CirMy", function(req, res) {

	res.json(200, data.CirMy);

});
router.get("/Adtopic", function(req, res) {

	res.json(200, data.Adtopic);

});
router.get("/t_slot", function(req, res) {

	res.json(200, data.t_slot);

});
router.get("/t_sift", function(req, res) {

	res.json(200, data.t_sift);

});
router.get("/Expert", function(req, res) {

	res.json(200, data.Expert);

});
router.get("/Slot", function(req, res) {

	res.json(200, data.Slot);

});
module.exports = router;
