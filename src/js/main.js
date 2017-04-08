
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
		game.running = true;
		game.count = 0;
		startDance();
		getComputerArray();
		//$start.classList.add("unclickable");
		
	}

	// Play computer array 
	function computerPlay() {
		game.count++;
		// Make color buttons unclickable credit: http://stackoverflow.com/questions/24266313/using-foreach-on-an-array-from-getelementsbyclassname-results-in-typeerror-und
		[].forEach.call($btn, function(element){
			element.classList.add("unclickable");
		});
		$display.innerHTML = game.count;
		showComputerArray();
		playerPlay();
	}

	// Display computer array credit http://codepen.io/renestl/pen/ORdNKZ
	function showComputerArray() {
		var i = 0;
		var sequence = setInterval(function(){
			var color = game.computerArray[i];
			lightSound(color);
			console.log(color);
			i++;
			if (i >= game.count){
				clearInterval(sequence);
			}
		}, 700);
	}
	
	function playerPlay() {
		game.playerArray = [];
		// Make color buttons clickable
		[].forEach.call($btn, function(element){
			element.classList.remove("unclickable");
		});
		[].forEach.call($btn, function(element){
			element.classList.add("clickable");
		});
		// Event listener for color buttons credit: http://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
		for (var i = 0; i < $btn.length; i++){
			$btn[i].addEventListener("click", getPlay, false);
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
		}
		
		

		// Check if player input matches computer array credit: http://codepen.io/renestl/pen/ORdNKZ
	// if (game.playerArray[game.playerArray.length -1] !== game.computerArray[game.playerArray. length -1]) 

	// if no match:

	// If strict, restart

	// if not strict replay computer array

	// if match

	// Check for win, do win dance, do start dance again

	// Reset button

	}
	

	

});