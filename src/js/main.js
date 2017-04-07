
document.addEventListener("DOMContentLoaded", function() {

	// Game object
	var game = {
		running: false,
		strict: false,
		count: 0,
		colors: ["red", "blue", "green", "yellow"],
		computerArray: [],
		playerArray: [],
		sound: {
			red: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
			blue: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
			green: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"), 
			yellow: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")

		},
	};

	// DOM elements
	var btn = document.getElementsByClassName("btn");
	var red = document.getElementsByClassName("top-left")[0];
	var blue = document.getElementsByClassName("top-right")[0];
	var green = document.getElementsByClassName("bottom-left")[0];
	var yellow = document.getElementsByClassName("bottom-right")[0];
	var display = document.getElementById("display");
	var start = document.getElementById("start");
	var led = document.getElementById("led");
	var strict = document.getElementById("strict");
	var reset = document.getElementById("reset");



	// Start game
	start.addEventListener("click", function(){
		startGame();
	});

	function startGame() {
		game.running = true;
		startDance();
	}
	
	// Do start dance
	function startDance() {
		setTimeout(function(){
			red.classList.add("active");
			game.sound.red.play();
		}, 400);
		setTimeout(function(){
			red.classList.remove("active");
		}, 800);

		setTimeout(function(){
			blue.classList.add("active");
			game.sound.blue.play();
		}, 800);
		setTimeout(function(){
			blue.classList.remove("active");
		}, 1200);


		setTimeout(function(){
			yellow.classList.add("active");
			game.sound.yellow.play();
		}, 1200);
		setTimeout(function(){
			yellow.classList.remove("active");
		}, 1600);


		setTimeout(function(){
			green.classList.add("active");
			game.sound.green.play();
		}, 1600);
		setTimeout(function(){
			green.classList.remove("active");
		}, 2000);
	}



// Generate computer array


// Iterate count

// Play computer array to count -1
	
	// Check if player input matches computer array
	// if (game.playerArray[game.playerArray.length -1] !== game.computerArray[game.playerArray. length -1]) 

	// if no match:

	// If strict, restart

// if not strict replay computer array

// if match

// Check for win, do win dance, do start dance again

// Play computer array to count -1

// Reset button

});