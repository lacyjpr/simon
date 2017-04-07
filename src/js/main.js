
document.addEventListener("DOMContentLoaded", function() {

	/* Model */

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
	var red = document.getElementById("red");
	var blue = document.getElementById("blue");
	var green = document.getElementById("green");
	var yellow = document.getElementById("yellow");
	var display = document.getElementById("display");
	var start = document.getElementById("start");
	var led = document.getElementById("led");
	var strict = document.getElementById("strict");
	var reset = document.getElementById("reset");

	// Generate computer array
	function getComputerArray() {
		for (var i = 0; i < 20; i++){
			game.computerArray.push(game.colors[(Math.floor(Math.random() * 4))]);
		}
		console.log(game.computerArray);
	}

	/* View */

	// Lights & sound
	function lightSound(color) {
		switch (color) {
		case red:
			console.log("lightSound red");
			red.classList.add("active");
			game.sound.red.play();
			setTimeout(function(){
				red.classList.remove("active");
			}, 400);
			break;
		case blue: 
			console.log("lightSound blue");
			blue.classList.add("active");
			game.sound.blue.play();
			setTimeout(function(){
				blue.classList.remove("active");
			}, 400);
			break;
		case green:
			console.log("lightSound green");
			green.classList.add("active");
			game.sound.green.play();
			setTimeout(function(){
				green.classList.remove("active");
			}, 400);
			break;
		case yellow:
			console.log("lightSound yellow");		
			yellow.classList.add("active");
			game.sound.yellow.play();
			setTimeout(function(){
				yellow.classList.remove("active");
			}, 400);
			break;
		}
	}

	// Do start dance
	function startDance() { 
		lightSound(red);
		setTimeout(function() {
			lightSound(blue);
		}, 400);
		setTimeout(function() {
			lightSound(yellow);
		}, 800);
		setTimeout(function() {
			lightSound(green);
		}, 1200);
		setTimeout(function() {
			lightSound(red);
		}, 1600);
		setTimeout(function() {
			lightSound(blue);
		}, 2000);
		setTimeout(function() {
			lightSound(yellow);
		}, 2400);
		setTimeout(function() {
			lightSound(green);
		}, 2800);
		setTimeout(function() {
			computerPlay();
		},3200);
		

	}


/* Control */

// Start game
	start.addEventListener("click", function(){
		startGame();
	});

	function startGame() {
		game.running = true;
		startDance();
		getComputerArray();
		//start.classList.add("unclickable");
		
	}

	// Play computer array to count -1
	function computerPlay() {
		game.count++;
		var i = 0;
		var sequence = setInterval(function(){
			lightSound(game.computerArray[i]);
			console.log(game.computerArray[i]);
			i++;
			if (i >= game.count){
				clearInterval(sequence);
			}
		}, 700);
	}
	
	
	// Check if player input matches computer array
	// if (game.playerArray[game.playerArray.length -1] !== game.computerArray[game.playerArray. length -1]) 

	// if no match:

	// If strict, restart

// if not strict replay computer array

// if match

// Check for win, do win dance, do start dance again

// Reset button

});