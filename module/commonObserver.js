function CommonObserver(){
	this.objl=[];
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

CommonObserver.prototype.create=function(o){
	for (var i in this) {
            o[i] = this[i];
            o.subscribers = [];
        }
		this.objl.push(o);
};
