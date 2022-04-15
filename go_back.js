function App() {

	var theButton;
	var spans;
	var currentSpan = 0;

	this.init = function () {

		theButton = document.querySelector('.the-button');
		spans = document.querySelectorAll('.background span');

		bindElements();
	}

	var bindElements = function () {
		setInterval(animateSubliminalSpans, 500);
	}

	var animateSubliminalSpans = function () {

		spans[currentSpan].className = "";
		currentSpan++;
		currentSpan %= spans.length;
		spans[currentSpan].className = "fade";
	}

}

var app = new App();
app.init();