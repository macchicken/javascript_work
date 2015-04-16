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