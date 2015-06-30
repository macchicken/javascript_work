Array.prototype.delRepeat = function () {// extend the 'Array'
        var temp = {}, len = this.length;
        for (var i = 0; i < len; i++) {
            var tmp = this[i];
            if (!temp.hasOwnProperty(tmp)) {// hasOwnProperty can check dictonary have that key
                temp[this[i]] = "yes";
            }
        }
        var y = 0,result = [];
        for (var te in temp) {
            result[y++] = te;
        }
        return result;
}
	
function delRepeatExample () {
        var arr = [];
        for (var i = 0; i < 10000; i++) {
            var t = parseInt(Math.random() * 10);
            arr[i] = (t.toString());
        }
        var s = new Date();// start time
        var a=arr.delRepeat();
        var dd = new Date() - s;//end time=(current time)-(start time)
		console.log(dd);
}