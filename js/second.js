define(function(){
	var first = document.getElementById("first");
	var a=first.value;
	if(a != ""){
		return parseInt(a);
	}else{
		return 0;
	}
});