var sinService = require('./modules/services.js');
var uService=sinService.singletonService.getInstance();
var userCounter=0;
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

function simpleChat(){
	var app = require('express')();
	var http = require('http').Server(app);
	var io = require('socket.io')(http);
	
	app.get('/', function(req, res){
	  res.send('<h1>Hello world</h1>');
	});
	
	io.on('connection', function(socket){
		console.log(socket.id+' a user connected');
		socket.on('add user', function(msg){
			userCounter=userCounter+1;
			console.log('add user message: ' + msg);
			uService.addUser(new User(socket.id,msg,1));
			socket.join(1);
			io.sockets.in(1).emit('login',{"numUsers":uService.getUsersCount()});
			io.sockets.in(1).emit('user joined',{"username":msg,"numUsers":uService.getUsersCount()});
			//socket.emit('login',{"numUsers":userCounter});
			//socket.emit('user joined',{"username":msg,"numUsers":userCounter});
		});
		socket.on('typing', function(){
			var user=uService.getUserById(socket.id);
			if (user==undefined){return;}
			//socket.emit('typing',{"username":user.getName()});
			socket.broadcast.to(1).emit('typing',{"username":user.getName()});
		});
		socket.on('stop typing', function(){
			var user=uService.getUserById(socket.id);
			if (user==undefined){return;}
			//socket.emit('stop typing',{"username":user.getName()});
			socket.broadcast.to(1).emit('stop typing',{"username":user.getName()});
		});
		socket.on('new message', function(msg){
			console.log('message: ' + msg);
			var user=uService.getUserById(socket.id);
			if (user==undefined){return;}
			//socket.emit('new message',{"username":user.getName(),"message":msg});
			socket.broadcast.to(1).emit('new message',{"username":user.getName(),"message":msg});
		});
		socket.on('disconnect', function(){
			var user=uService.getUserById(socket.id);
			console.log(socket.id+' is disconnected');
			if (user==undefined){return;}
			userCounter=userCounter-1;
			uService.removeUser(socket.id);
			//socket.emit('user left',{"username":user.getName(),"numUsers":userCounter});
			socket.broadcast.to(1).emit('user left',{"username":user.getName(),"numUsers":uService.getUsersCount()});
		});
	});
	
	
	http.listen(20081, function(){
	  console.log('listening on *:20081');
	});
}

simpleChat();
