var sinService = require('./modules/services.js');
var helpers = require('./modules/helper.js');
var uService=sinService.singletonService.getInstance();
var roomLobby=sinService.rsingletonService.getInstance();
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
	helpers.responseView(app,"/guess");
	helpers.includeResourceFile(app,"/materialize/*");
	helpers.includeResourceFile(app,"/jsmodule/*");
	helpers.includeResourceFile(app,"/images/*");
	
	io.on('connection', function(socket){
		console.log(socket.id+' a user connected');
		socket.on('user nickname', function(msg){
			console.log('user nickname: %s, user roomNum: %s' , msg.nickname , msg.roomNum);
			uService.addUser(new User(socket.id,msg.nickname,msg.roomNum));
			if (roomLobby.getUsersCount(msg.roomNum)==0){
				roomLobby.initRoom(msg.roomNum);
				socket.join(msg.roomNum);
				socket.emit('new user',msg.nickname+' connected');
			}else if (roomLobby.getUsersCount(msg.roomNum)<6){
				roomLobby.addUser(msg.roomNum);
				socket.join(msg.roomNum);
				io.sockets.in(msg.roomNum).emit('new user',msg.nickname+' connected');
			}else{
				socket.emit('room full',"choose another one");
			}
		});
		socket.on('chat message', function(msg){
			console.log('message: ' + msg);
			var user=uService.getUserById(socket.id);
			io.sockets.in(user.getRoom()).emit('chat message',user.getName()+' : '+msg);
		});
		socket.on('user typing', function(){
			var user=uService.getUserById(socket.id);
			socket.broadcast.to(user.getRoom()).emit('typing',user.getName()+' is typing');
		});
		socket.on('stop typing', function(){
			var user=uService.getUserById(socket.id);
			socket.broadcast.to(user.getRoom()).emit('stop typing',true);
		});
		socket.on('disconnect', function(){
			var user=uService.getUserById(socket.id);
			console.log(socket.id+' is disconnected');
			if (user==undefined){return;}
			if (roomLobby.getUsersCount(user.getRoom())>0){
				socket.broadcast.to(user.getRoom()).emit('user leave',user.getName()+' leave');
			}
			roomLobby.decrementUsers(user.getRoom());
		});
	});
	
	
	http.listen(20080, function(){
	  console.log('listening on *:20080');
	});
}

simpleChat();
