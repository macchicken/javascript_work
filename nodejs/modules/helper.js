var urls={};
urls["/index"]="/index.html";
urls["/avatar"]="/Avatar Content.html";
urls["/guess"]="/Guess.html";
var dictoryName=__dirname.slice(0,__dirname.lastIndexOf("\\"));
function includeResourceFile(appi,resourcePath){
	appi.get(resourcePath, function(req, res){
	  res.sendFile(dictoryName + req.originalUrl);
	});
}

function responseView(appi,url){
	appi.get(url, function(req, res){
	  res.sendFile(dictoryName + urls[url]);
	});
}

function httpServer(portNum){
	var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(portNum, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:'+portNum+"/");
}

function tcpServer(portNum){
	var net = require('net');
	var server = net.createServer(function (socket) {
	  socket.write('Echo server\r\n');
	  socket.pipe(socket);
	});
	server.listen(portNum, '127.0.0.1');
}

exports.includeResourceFile=includeResourceFile
exports.responseView=responseView