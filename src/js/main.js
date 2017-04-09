
document.addEventListener("DOMContentLoaded", function() {

	// Game object
	var game = {
		running: false,
		strict: false,
		count: 0,
		colors: ["red", "blue", "green", "yellow"],
		computerArray: [],
		playerArray: [],
		move: "",
		sound: {
			red: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
			blue: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
			green: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"), 
			yellow: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")

		},
	};

	// DOM elements
	var $btn = document.getElementsByClassName("btn");
	var $red = document.getElementById("red");
	var $blue = document.getElementById("blue");
	var $green = document.getElementById("green");
	var $yellow = document.getElementById("yellow");
	var $display = document.getElementById("display");
	var $start = document.getElementById("start");
	var $led = document.getElementById("led");
	var $strict = document.getElementById("strict");
	var $reset = document.getElementById("reset");

	// Generate computer array
	function getComputerArray() {
		game.computerArray = [];
		for (var i = 0; i < 20; i++){
			game.computerArray.push(game.colors[(Math.floor(Math.random() * 4))]);
		}
		console.log(game.computerArray);
	}

	// Lights & sound
	function lightSound(color) {
		switch (color) {
		case "red":
			$red.classList.add("active");
			game.sound.red.play();
			setTimeout(function(){
				$red.classList.remove("active");
			}, 400);
			break;
		case "blue": 
			$blue.classList.add("active");
			game.sound.blue.play();
			setTimeout(function(){
				$blue.classList.remove("active");
			}, 400);
			break;
		case "green":
			$green.classList.add("active");
			game.sound.green.play();
			setTimeout(function(){
				$green.classList.remove("active");
			}, 400);
			break;
		case "yellow":	
			$yellow.classList.add("active");
			game.sound.yellow.play();
			setTimeout(function(){
				$yellow.classList.remove("active");
			}, 400);
			break;
		default:
			console.log("error");
			break;
		}
	}

	function sound(color) {
		switch (color) {
		case "red":
			game.sound.red.play();
			break;
		case "blue": 
			game.sound.blue.play();
			break;
		case "green":
			game.sound.green.play();
			break;
		case "yellow":	
			game.sound.yellow.play();
			break;
		default:
			console.log("error");
			break;
		}
	}

	// Do start dance
	function startDance() { 
		lightSound("red");
		setTimeout(function() {
			lightSound("blue");
		}, 400);
		setTimeout(function() {
			lightSound("yellow");
		}, 800);
		setTimeout(function() {
			lightSound("green");
		}, 1200);
		setTimeout(function() {
			lightSound("red");
		}, 1600);
		setTimeout(function() {
			lightSound("blue");
		}, 2000);
		setTimeout(function() {
			lightSound("yellow");
		}, 2400);
		setTimeout(function() {
			lightSound("green");
		}, 2800);
		setTimeout(function() {
			computerPlay();
		},3800);
	}


	// Start listener
	$start.addEventListener("click", function(){
		startGame();
	});

	// Start game
	function startGame() {
		$display.innerHTML = "--"
		game.running = true;
		game.count = 0;
		startDance();
		getComputerArray();
		$start.classList.add("unclickable");
		
	}

	// Play computer array 
	function computerPlay() {
		console.log("computerPlay called");
		game.count++;
		console.log("game.count " + game.count);
		$display.innerHTML = game.count;
		showComputerArray();
	}

	// Display computer array 
	function showComputerArray() {
		// Show game count
		$display.innerHTML = game.count;
		// Empty player array
		game.playerArray = [];
		// Show computer array credit http://codepen.io/renestl/pen/ORdNKZ
		var i = 0;
		var sequence = setInterval(function(){
			// Make color buttons unclickable 
			$red.classList.add("unclickable");
			console.log($red.classList.contains("unclickable"));
			$blue.classList.add("unclickable");
			console.log($blue.classList.contains("unclickable"));
			$green.classList.add("unclickable");
			console.log($green.classList.contains("unclickable"));
			$yellow.classList.add("unclickable");
			console.log($yellow.classList.contains("unclickable"));
			var color = game.computerArray[i];
			lightSound(color);
			console.log(color);
			i++;
			if (i >= game.count){
				clearInterval(sequence);
				playerPlay();
			}
		}, 700);
		
	}
	
	function playerPlay() {
		console.log("playerPlay called");
		// Make color buttons clickable
		$red.classList.remove("unclickable");
		$blue.classList.remove("unclickable");
		$green.classList.remove("unclickable");
		$yellow.classList.remove("unclickable");
		game.move = "";
		// Event listener for color buttons credit: http://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
		for (var i = 0; i < $btn.length; i++){
			$btn[i].addEventListener("click", getPlay, false);
		}
	}
	// Get player move & push to playerArray
	function getPlay() {
		console.log("getPlay called");
		game.move = this.id;
		console.log("game.move " + game.move);
		sound(game.move);
		// Push player input to playerArray
		game.playerArray.push(game.move);
		console.log(game.playerArray);
		checkPlay();
	}

	function checkPlay() {
		// Check if player input matches computer array credit: http://codepen.io/renestl/pen/ORdNKZ
		// If no match:
		if (game.playerArray[game.playerArray.length -1] !== game.computerArray[game.playerArray.length -1]) {
			// If strict, restart
			if (game.strict === true) {
				startGame();
			} 
			// If not strict replay computer array
			else {
				console.log("wrong!");
				game.sound.red.play();
				game.sound.blue.play();
				game.sound.green.play();
				game.sound.yellow.play();
				showComputerArray();
			}
		} 
		// Otherwise, we have a match	
		else {
		// Check for win
			if (game.count === 5 && game.playerArray.length === game.count) {
				$display.innerHTML = "Win";
				$start.classList.remove("unclickable");
				$start.classList.add("clickable");
				// Make color buttons unclickable 
				$red.classList.add("unclickable");
				$blue.classList.add("unclickable");
				$green.classList.add("unclickable");
				$yellow.classList.add("unclickable");
			} else if (game.playerArray.length < game.count) {
				playerPlay();					
			} else {
				computerPlay();
			}

		}
	}
	
	
});