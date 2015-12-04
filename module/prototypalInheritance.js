function testPrototypeInheri(){
	var A = {"foo":"Foo value"};
	var B = Object.create(A);
	B.bar = "Bar value";
	var C = Object.create(B);
	C.bar = function(){
		console.log("C Bar value");
	}
	var testRef = C.bar;
	console.log(C.foo);
	console.log(typeof(C.bar));
	C.bar();
	testRef();
	console.log(B.foo);
	console.log(B.bar);
	console.log(A.foo);
	console.log(A.bar);
	
}

var testGetPrototypeProperties = function(){
	function getPropertiesof(obj,acc,pro){
		if (!obj) return acc;
		var proto = Object.getPrototypeOf(obj);
		if (!proto) return acc;
		return getPropertiesof(proto,acc+'->'+proto[pro],pro);
	}
	
	var a = Object.create(Object.prototype);
	var b = Object.create(a);
	var c = Object.create(b);
	a.name="name is A";
	b.name="name is B";
	c.name="name is C";
	
	console.log(getPropertiesof(c,c.name,"name"));
}

var testObjectThis = function(){
	var foo = {};
	foo.bar = "foo Bar";
	foo.getBar = function(){
		return this.bar;
	};
	foo.dosth = function(){
		var that=this;
		var getBarInner = function(){
			return that.bar;
		};
		return getBarInner();
	};
	foo.dosthWithBind = function(){
		var getBarInner = function(text){
			return this.bar+text;
		}.bind(this," 1 ");
		return getBarInner();
	};
	foo.dosthWithApply = function(){
		var getBarInner = function(text,textOne){
			return this.bar+text+textOne;
		};
		return getBarInner.apply(this,[" 1 "," 2 "]);
	};
	foo.dosthWithCall = function(){
		var getBarInner = function(text,textOne){
			return this.bar+text+textOne;
		};
		return getBarInner.call(this," 1 "," 2 ");
	};
	var getBarRef = foo.getBar;
	var getBarRef = function(){
		return foo.getBar();
	};
	console.log(getBarRef());
	console.log(foo.dosth());
	console.log(foo.dosthWithBind());
	console.log(foo.dosthWithApply());
	console.log(foo.dosthWithCall());
}