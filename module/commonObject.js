function Blogger() {

  if (typeof Blogger._initialized == "undefined") {
    Blogger.prototype.recommend = function(pubOpr,id) {
	  pubOpr(this,'dudu twit' + id);
    };
    Blogger._initialized = true;
  }
};

function User() {

  if (typeof User._initialized == "undefined") {
    User.prototype.vote = function(pubOpr,id) {
	  pubOpr(this,'someone vote for !ID=' + id);
    };
    User._initialized = true;
  }
};


var trolleyModule = (function(){

	var items=[];
	
	function disPlayItemInner(){return items;}

	return { 

		addItem: function( item ) {
		  items.push(item);
		},

		getItemCount: function () {
		  return items.length;
		},

		// Public alias to a  private function
		disPlayItem: disPlayItemInner,

		getTotalValue: function () {
		  var q = this.getItemCount(),
			  p = 0;
		  while (q--) {
			p += items[q].price;
		  }
		  return p;
		}
  };
}());

var trolleySingleton=(function(){
	
	var instance;
	function init(){
		var items=[];
		return{
			disPlayItem:function(){return items;},
			addItem: function( item ) {
				items.push(item);
			},
			getItemCount: function () {
				return items.length;
			},
			getTotalValue: function () {
				var q = this.getItemCount(),
					p = 0;
				while (q--) {
					p += items[q].price;
				}
				return p;
			}
		};
	};
	return{
		getInstance: function(){
			if (!instance){instance=init();}
			return instance;
		}
	};
	
})();

var clone =function(obj){
 var _f =function(){};
    　　//这句是原型式继承最核心的地方，函数的原型对象为对象字面量
   　　_f.prototype = obj;
  　　return new _f;
};

var trolleyExtendSingleton=clone(trolleySingleton);
