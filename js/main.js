$("document").ready(function(){
	$("#getQuote").click(function() {
		getQuote();
	});
});


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
	$("#quote").html(response.quoteText);
	$("#quoteAuthor").html("<br>" + " - " + response.quoteAuthor);
}

function errorMsg(err) {
	console.warn('ERROR(' + err.code + '): ' + err.message);
}

