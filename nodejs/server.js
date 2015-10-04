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

var users={};
var urls={};
var roomPeople={};
function User(id,name,room) {
   this.id = id;
   this.name = name;
   this.room = room;

   this.getId = function() {
      return id;
   };
   this.getName = function() {
      return name;
   };
   this.getRoom = function() {
      return room;
   };
}
urls["/index"]="/index.html";
urls["/avatar"]="/Avatar Content.html";
urls["/guess"]="/Guess.html";
function includeResourceFile(appi,resourcePath){
	appi.get(resourcePath, function(req, res){
	  res.sendFile(__dirname + req.originalUrl);
	});
}
function responseView(appi,url){
	appi.get(url, function(req, res){
	  res.sendFile(__dirname + urls[url]);
	});
}
function simpleChat(){
	var app = require('express')();
	var http = require('http').Server(app);
	var io = require('socket.io')(http);
	
	app.get('/', function(req, res){
	  res.send('<h1>Hello world</h1>');
	});
	responseView(app,"/index");
	responseView(app,"/avatar");
	responseView(app,"/guess");
	includeResourceFile(app,"/materialize/*");
	includeResourceFile(app,"/jsmodule/*");
	includeResourceFile(app,"/images/*");
	
	io.on('connection', function(socket){
		console.log(socket.id+' a user connected');
		socket.on('user nickname', function(msg){
			console.log('user nickname: ' + msg);
			users[socket.id]=new User(socket.id,msg.nickname,msg.roomNum);
			socket.join(msg.roomNum);
			if (roomPeople[msg.roomNum]==undefined){
				roomPeople[msg.roomNum]=1;
				socket.broadcast.to(msg.roomNum).emit('new user',msg.nickname+' connected');
			}else if (roomPeople[msg.roomNum]<2){
				roomPeople[msg.roomNum]=2;
				socket.broadcast.to(msg.roomNum).emit('new user',msg.nickname+' connected');
			}else{
				socket.emit('room full',"choose another one");
			}
		});
		socket.on('chat message', function(msg){
			console.log('message: ' + msg);
			var user=users[socket.id];
			socket.broadcast.to(user.getRoom()).emit('chat message',users[socket.id].getName()+' : '+msg);
		});
		socket.on('user typing', function () {
			var user=users[socket.id];
			socket.broadcast.to(user.getRoom()).emit('typing',users[socket.id].getName()+' is typing');
		});
		socket.on('stop typing', function () {
			var user=users[socket.id];
			socket.broadcast.to(user.getRoom()).emit('stop typing',true);
		});
		socket.on('disconnect', function () {
			var user=users[socket.id];
			console.log(socket.id+' is disconnected');
			socket.broadcast.to(user.getRoom()).emit('user leave',users[socket.id].getName()+' leave');
		});
	});
	
	
	http.listen(20080, function(){
	  console.log('listening on *:20080');
	});
}

simpleChat();