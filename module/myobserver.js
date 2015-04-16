function Myobserver(){
	this.topics={};
	this.subUid=-1;// unique id for each function in the subscribing topic
};

Myobserver.prototype.publish = function (topic, args) {
	console.log('publish topic: '+this.topics[topic]);
	if (!this.topics[topic]) {return false;}
		var tmpobj=this;
        setTimeout(function () {
            var subscribers = tmpobj.topics[topic];
            var len = subscribers ? subscribers.length : 0;
            while (len--) {
                subscribers[len].func(topic, args);
            }
        }, 0);
        return true;
};

Myobserver.prototype.subscribe = function (topic, func) {
		console.log('subscribe topic: '+topic);
		console.log('subscribe function: '+func);
        if (!this.topics[topic]) {
            this.topics[topic] = [];//use topic as a key for storing the subscriber
        }
        var token = (++this.subUid).toString();
        this.topics[topic].push({token: token,func: func});
        return token;
};

Myobserver.prototype.unsubscribe = function (token) {
        for (var m in this.topics) {
            if (this.topics[m]) {
                for (var i = 0, j = this.topics[m].length; i < j; i++) {
                    if (this.topics[m][i].token === token) {
                        this.topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
};