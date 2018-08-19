var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
	console.log(req.url);
	if(req.url=='/a'){
		res.writeHead(200,{'Content-Type':'text/plain;charset=UTF-8'});
		res.end("go to a");
	}
	else if(req.url=='/index'){
		fs.readFile("./public/index.html",function(err,data){
			if (err) throw err;
			res.writeHead(200,{'Content-Type':'text/html'});
	  		res.end(data);
		});
	}else if(req.url=="/images/Capture.PNG"){
		fs.readFile("./public/images/Capture.PNG",function(err,data){
			if(err) throw err;
			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end(data);
		});
	}
	else{
		res.writeHead(400,{'Content-Type':'text/plain'});
		res.end("not found");
	}
});
server.listen(1337,"127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');