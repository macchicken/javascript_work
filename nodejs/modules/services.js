var usersService=(function(){
	
	var instance;
	function init(){
		console.log("usersService init");
		var items={};
		return{
			addUser: function(item) {
				items[item.id]=item;
			},
			getUsersCount: function() {
				return items.length;
			},
			getUserById: function(userId) {
				return items[userId];
			},
			removeUser: function(userId){
				delete items[userId];
			}
		};
	};
	return{
		getInstance: function() {
			if (!instance){instance=init();}
			return instance;
		}
	};
})();

var roomLobby=(function(){
	
	var instance;
	function init(){
		console.log("roomLobby init");
		var items={};
		return{
			addUser: function(roomNum) {
				items[roomNum]=items[roomNum]+1;
			},
			initRoom: function(roomNum) {
				if (items[roomNum]==undefined||items[roomNum]==0){
					items[roomNum]=1;
				}
			},
			getUsersCount: function(roomNum) {
				return items[roomNum]==undefined?0:items[roomNum];
			},
			decrementUsers: function(roomNum) {
				return items[roomNum]=items[roomNum]-1;
			}
		};
	};
	return{
		getInstance: function() {
			if (!instance){instance=init();}
			return instance;
		}
	};
})();

exports.singletonService=usersService;
exports.rsingletonService=roomLobby;
