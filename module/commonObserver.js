function CommonObserver(){
	var objl=[];
	this.appendObject=function(o){objl.push(o);}
	this.viewObjl=function(){console.log(objl);}
	this.toString=function(){var str='';for (var i in this) {str=str+i+" : ["+this[i]+"] ";}return str;}
};

CommonObserver.prototype.addSubscriber=function(callback){
	this.subscribers[this.subscribers.length] = callback;
};

CommonObserver.prototype.removeSubscriber=function(callback){
	for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete (this.subscribers[i]);
            }
        }
};

CommonObserver.prototype.publish=function(o,what){
	for (var i = 0; i < o.subscribers.length; i++) {
            if (typeof o.subscribers[i] === 'function') {
                o.subscribers[i](what);
            }
        }
};

CommonObserver.prototype.viewSubscribers=function(){
	console.log('subscribers '+this.subscribers);
};

CommonObserver.prototype.create=function(o){
	for (var i in this) {
			if (i==='appendObject'){continue;}
            o[i] = this[i];
            o.subscribers = [];
        }
		this.appendObject(o);
};
