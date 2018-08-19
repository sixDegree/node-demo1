var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
	fs.readFile('./test.txt', function (err, data) {
	  if (err) throw err;
	  res.end(data.toString());
	  console.log(data.toString());
	});
	console.log("-------");
});
server.listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');