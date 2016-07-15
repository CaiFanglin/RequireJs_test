define(function(){
	var second = document.getElementById("second");
	var b=second.value;
	if(b != ""){
		return parseInt(b);
	}else{
		return 0;
	}
});