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