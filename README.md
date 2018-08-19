
### 01.js

```js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
  res.end('Hello World 你好！\n');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
```

```
node 01
```

### 02.js

```js
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
```

```
node 02
```


### 03.js

```js
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

```

```
node 03
```


### 04.js

```
npm install express
```

```js
var express=require("express");
var app = express();
app.use(express.static('public'));
app.get("/index",function(req,res){
	console.log("redirect to index.html")
	res.redirect("/index.html");
});
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

```

index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hello</title>
</head>
<body>
	<h1>Hello World</h1>
	<img src="images/Capture.PNG">
</body>
</html>
```

```
node 04
```