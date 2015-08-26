function httpServer(){
	var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(20080, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:20080/');
}

function tcpServer(){
	var net = require('net');
	var server = net.createServer(function (socket) {
	  socket.write('Echo server\r\n');
	  socket.pipe(socket);
	});
	server.listen(20080, '127.0.0.1');
}
var indexPage="/index";
var users={};
function simpleChat(){
	var app = require('express')();
	var http = require('http').Server(app);
	var io = require('socket.io')(http);
	
	app.get('/', function(req, res){
	  res.send('<h1>Hello world</h1>');
	});
	app.get(indexPage, function(req, res){
	  res.sendFile(__dirname + '/view/index.html');
	});
	
	io.on('connection', function(socket){
		console.log(socket.id+' a user connected');
		socket.on('user nickname', function(msg){
			console.log('user nickname: ' + msg);
			users[socket.id]=msg;
			socket.broadcast.emit('new user',msg+' connected');
		});
		socket.on('chat message', function(msg){
			console.log('message: ' + msg);
			var nickname=users[socket.id];
			//io.emit('chat message', nickname+' : '+msg,{ for: 'everyone' });
			socket.broadcast.emit('chat message',nickname+' : '+msg);
		});
		socket.on('user typing', function () {
			socket.broadcast.emit('typing',users[socket.id]+' is typing');
		});
		socket.on('stop typing', function () {
			socket.broadcast.emit('stop typing',true);
		});
		socket.on('disconnect', function () {
			console.log(socket.id+' is disconnected');
			socket.broadcast.emit('user leave',users[socket.id]+' leave');
		});
	});
	
	
	http.listen(20080, function(){
	  console.log('listening on *:20080');
	});
}

simpleChat();