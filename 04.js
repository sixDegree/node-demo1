var express=require("express");
var app = express();
app.use(express.static('public'));
app.get("/index",function(req,res){
	console.log("redirect to index.html")
	res.redirect("/index.html");
});
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');