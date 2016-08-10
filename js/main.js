$("document").ready(function(){
	$("#getQuote").click(function() {
		getQuote();
	});
});

var colors = ["#00ffff", "#ff00ff", "#ffff00"];
var shadows = ["#00d8d8", "#eb00eb", "#ebeb00"]

function getQuote() {
	$.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
		contentType: 'application/x-www-form-urlencoded',
		type: 'POST',
		headers: {'X-Mashape-Key': 'GDfWmv6WI0mshs8rzl2AhvC7fe2cp1LLt5gjsnuCPN16a35TUK'},
		dataType: "json",
		Accept: 'application/json',
		data: {},
		success: function(data) {
			var currentQuote = data.quote;
			var currentAuthor = data.author;
			var index = getrandomkey();
			var quoteColor = colors[index];
			var shadowColor = shadows[index];
			$("#quote").html(data.quote);
			$("#quoteCss").css({"color": quoteColor,"text-shadow": "0 0 20px" + shadowColor});
			$("#quoteAuthor").html("<br>" + " - " + data.author);
			$("#authorCss").css({"color": quoteColor,"text-shadow": "0 0 20px" + shadowColor});

			$("#shareQuoteURL").attr('href','https://twitter.com/intent/tweet?hashtags=randomQuotes&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
		}
	})
}





function errorMsg(err) {
	console.warn('ERROR(' + err.code + '): ' + err.message);
}

function getrandomkey() {
	return Math.floor(Math.random() * (3));
}

