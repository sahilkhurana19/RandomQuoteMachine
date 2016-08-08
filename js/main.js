$("document").ready(function(){
	$("#getQuote").click(function() {
		getQuote();
	});
});

var colors = ["#00ffff", "#ff00ff", "#ffff00"];
var shadows = ["#00d8d8", "#eb00eb", "#ebeb00"]


function getQuote() {
	$.ajax({
		url: "http://api.forismatic.com/api/1.0/",
		jsonp: "jsonp",
		dataType: "jsonp",
		data: {
			method: "getQuote",
			lang: "en",
			format: "jsonp"
		} 
	})
	.done(addQuote)
	.fail(errorMsg);
}

function addQuote(response) {
	var index = getrandomkey();
	var quoteColor = colors[index];
	var shadowColor = shadows[index];
	$("#quote").html(response.quoteText);
	$("#quoteCss").css({"color": quoteColor,"text-shadow": "0 0 20px" + shadowColor});
	$("#quoteAuthor").html("<br>" + " - " + response.quoteAuthor);
	$("#authorCss").css({"color": quoteColor,"text-shadow": "0 0 20px" + shadowColor});
}

function errorMsg(err) {
	console.warn('ERROR(' + err.code + '): ' + err.message);
}

function getrandomkey() {
	return Math.floor(Math.random() * (3));
}

