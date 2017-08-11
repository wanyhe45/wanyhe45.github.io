
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length ; i++) {
	//add initial colors to squares
	squares[i].style.background =  colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of cliked square
		var clikedColor = this.style.background;
		//compare color to pickedColor
		console.log(clikedColor,pickedColor);
		if (clikedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again";
			changeColors(clikedColor);
			// h1.style.background = clikedColor;
		} else {
		 	this.style.background = "#232323";
		 	messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < color.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0 ; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256); 
	var green = Math.floor(Math.random() * 256); 
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// resetButton.addEventListener("click", function(){
// 	colors = generateRandomColors(6);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		squares[i].style.background = color;
// 	}
// 	h1.style.background = #232323；
// })