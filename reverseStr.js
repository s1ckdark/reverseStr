function sorting(str){ 
	var len = str.length;
	var oriStr = Array.from(str);
	var conStr = new Array();
	for(var i=0;i<len;i++){
		if(len-i>0){
		conStr[i]=oriStr[len-i-1];
		}
	}
	conStr = conStr.join("");
		return conStr;
}

function sorting2(str){
var name = str;
var nameReverse = name.split("").reverse().join(""); 
return nameReverse;
}
console.log(sorting("hello"));
console.log(sorting2("hello"));