require.config({
	baseUrl:'js',
	paths: {
		"second":"second",
		"three":"three",
		"four":"four"
	}
});

require(["four"],function(four){
	var output = document.getElementById("output");
	output.innerHTML = four;
});