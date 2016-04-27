var score = 0;
var highscore = 0;
var mana = 4;
var sprite_number = 1;
var run = true;
var end = false;
var boom_number = 3;
var blood_list = new Array();
var run_requestAnimation;

//storge the highscore
if(sessionStorage.getItem("highscore") == null) {
	sessionStorage.setItem("highscore",0);
} else {
	highScore = sessionStorage.getItem("highscore");
}

// Image in game
//background
var background = new Image();
var background_ready = false;
background.onload = function() {
	background_ready = true;
}
background.src = "images/background.jpg";

//sprite
var sprite_ready = false;
var sprite = new Image();
sprite.onload = function() {
	sprite_ready = true;	
}
sprite.src = "images/sprite.png";

//heart
var heart = new Image();
var heart_ready = false;
heart.onload = function() {
	heart_ready = true;
}
heart.src = "images/heart2.png";	

//boom
var boom = new Image();
var boom_ready = false;
boom.onload = function() {
	boom_ready = true;
}
boom.src = "images/boom.jpg";

//blood
var blood = new Image();
var blood_ready = false;
blood.onload = function() {
	blood_ready = true;
}
blood.src = "images/blood.png";

//pause
var pause = new Image();
var pause_ready = false;
pause.onload = function() {
	pause_ready = true;
}
pause.src = "images/pause.png";

//reset
var reset = new Image();
var reset_ready = false;
reset.onload = function() {
	reset_ready = true;
}
reset.src = "images/restart.png";

//pause on content
var pause_content = new Image();
pause_content.src = "images/play.png";

//blood when sprite die
var blood = new Image();
blood.src = "images/blood.png";

//draw elements
var render = function() {
	//draw background
	if(background_ready) {
		context.drawImage(background, 0, 0);
	}
	updateblood();
	//draw sprite
	if (sprite_ready) {
		if(sprite1.show) {
			context.drawImage(sprite, sprite1.startX, sprite1.startY, 110, 110);
		}
		if(sprite2.show) {
			context.drawImage(sprite, sprite2.startX, sprite2.startY, 110, 110);
		}
		if(sprite3.show) {
			context.drawImage(sprite, sprite3.startX, sprite3.startY, 110, 110);
		}
		if(sprite4.show) {
			context.drawImage(sprite, sprite4.startX, sprite4.startY, 110, 110);
		}
		if(sprite5.show) {
			context.drawImage(sprite, sprite5.startX, sprite5.startY, 110, 110);
		}
		if(sprite6.show) {
			context.drawImage(sprite, sprite6.startX, sprite6.startY, 110, 110);
		}
		if(sprite7.show) {
			context.drawImage(sprite, sprite7.startX, sprite7.startY, 110, 110);
		}	
		if(sprite8.show) {
			context.drawImage(sprite, sprite8.startX, sprite8.startY, 110, 110);
		}
	}
	//draw boom 
	if(boom_ready) {
		var x = 380;
		for(var i = 0; i < boom_number; i++) {
			context.drawImage(boom, x, 0, 40, 40);
			x += 37;
		} 
	}	
	
	//draw pause
	if(pause_ready) {
		context_footer.drawImage(pause, 20, 15, 50, 50);
	}
	//draw reset
	if(reset_ready) {
		context_footer.drawImage(reset, 90, 15, 50, 50);	
	}
	//draw heart
	var x_heart = 160;
	console.log(mana);

	for(var i = 0; i < mana; i++) {
	context_footer.drawImage(heart, x_heart, 15, 50, 50);
			x_heart += 35;
	};
	//draw highscore
	highScore = sessionStorage.getItem("highscore");
	context_footer.beginPath();
	context_footer.fillStyle = "#440066";
	context_footer.rect(350, 45, 150, 30);
	context_footer.fill();
	context_footer.closePath();
	context_footer.beginPath();
	context_footer.fillStyle = "#ffff00"
	context_footer.font = "20px Arial";
	highScore = sessionStorage.getItem("highscore");
	context_footer.fillText("Highscore: " + highscore, 360, 67);
	//draw score
	context_footer.beginPath();
	context_footer.fillStyle = "#440066";
	context_footer.rect(350, 6, 150, 30);
	context_footer.fill();
	context_footer.closePath();
	context_footer.beginPath();
	context_footer.fillStyle = "#ffff00";
	context_footer.font = "20px Arial";
	context_footer.fillText("Scrore: " + score, 360, 28);
	//draw pause icon on content
	if(!run && !end) {
		context.drawImage(pause_content, 175, 175, 150, 150);
	}
	//draw gameover
	if(!run && end) {
		
		context.fillStyle = "#440066";
		context.font = "55px Arial";
		context.fillText("GAME OVER", 90, 265);
		//draw new highscore
		if(score > highscore) {
			highscore = score;
			sessionStorage.setItem("highscore", score);
			context.fillStyle = "#440066";
			context.font = "30px Arial";
			context.fillText("NEW HIGH SCORE: " + highscore, 95, 295);
		}
	}
}

//refresh sprite on canvas
function refresh(sprite) {
	sprite.show = false;
	sprite.startX = sprite.beginX;
	sprite.startY = sprite.beginY;
	sprite.stopX = sprite.endX;
	sprite.stopY = sprite.endY;
	sprite.speed = speed;
}

//random sprite
function random() {
	if (!sprite1.show) {
		refresh(sprite1);
	}
	if (!sprite2.show) {
		refresh(sprite2);
	}
	if (!sprite3.show) {
		refresh(sprite3);
	}
	if (!sprite4.show) {
		refresh(sprite4);	
	}
	if (!sprite5.show) {
		refresh(sprite5);	
	}
	if (!sprite6.show) {
		refresh(sprite6);
	}
	if (!sprite7.show) {
		refresh(sprite7);
	}
	if (!sprite8.show) {
		refresh(sprite8);
	}
	var value = Math.floor((Math.random() * 8) + 1);
	switch(value) {
		case 1:
			if (!sprite1.show) {
				sprite1.show = true;
			}
			break;
		case 2:
			if (!sprite2.show) {
				sprite2.show = true;
			}
			break;
		case 3:
			if (!sprite3.show) {
				sprite3.show = true;
			}
			break;
		case 4:
			if (!sprite4.show) {
				sprite4.show = true;
			}
			break;
		case 5:
			if (!sprite5.show) {
				sprite5.show = true;
			}
			break;
		case 6:
			if (!sprite6.show) {
				sprite6.show = true;
			}
			break;
		case 7:
			if (!sprite7.show) {
				sprite7.show = true;
		}
			break;
		case 8:
			if (!sprite8.show) {
				sprite8.show = true;
		}
			break;
	}
}

function updatesprite(sprite) {
	sprite.click = true;
	if (sprite.startX > sprite.stopX) {
		sprite.startX -= sprite.speed;
	} else if (sprite.startX < sprite.stopX) {
		sprite.startX += sprite.speed;
	}

	if (sprite.startY > sprite.stopY) {
		sprite.startY -= sprite.speed;
	} else if (sprite.startY < sprite.stopY) {
		sprite.startY += sprite.speed;
	}

	if (sprite.startX == sprite.stopX && sprite.startY == sprite.stopY) {
		sprite.startX = sprite.stopX;
		sprite.startY = sprite.stopY;
		sprite.stopX = sprite.beginX;
		sprite.stopY = sprite.beginY;
	}

	if (sprite.startX == sprite.beginX && sprite.startY == sprite.beginY) {
		sprite.show = false;
		sprite.stop = true;
		sprite.startX = sprite.beginX;
		sprite.startY = sprite.beginY;
		sprite.stopX = sprite.endX;
		sprite.stopY = sprite.endY;
		//score -= 5;
		//mana--;
		random();
	}
}

/*
* kill sprites when click boom and add score
*/
function getBoom() {
	//mana++;
	score += 10;
	if(sprite1.show) {
		score += 10;
		sprite1.show = false;
		sprite1.click = false;
		getblood(sprite1.startX, sprite1.startY);
	}
	if(sprite2.show) {
		score += 10;
		sprite2.show = false;
		sprite2.click = false;
		getblood(sprite2.startX, sprite2.startY);
	}
	if(sprite3.show) {
		score += 10;
		sprite3.show = false;
		sprite3.click = false;
		getblood(sprite3.startX, sprite3.startY);
	}
	if(sprite4.show) {
		score += 10;
		sprite4.show = false;
		sprite4.click = false;
		getblood(sprite4.startX, sprite4.startY);
	}
	if(sprite5.show) {
		score += 10;
		sprite5.show = false;
		sprite5.click = false;
		getblood(sprite5.startX, sprite5.startY);
	}
	if(sprite6.show) {
		score += 10;
		sprite6.show = false;
		sprite6.click = false;
		getblood(sprite6.startX, sprite6.startY);
	}
	if(sprite7.show) {
		score += 10;
		sprite7.show = false;
		sprite7.click = false;
		getblood(sprite7.startX, sprite7.startY);
	}
	if(sprite8.show) {
		score += 10;
		sprite8.show = false;
		sprite8.click = false;
		getblood(sprite8.startX, sprite8.startY);
	}
	speed = speed;
		setTimeout(function() {
		random();
	}, 1000);
}

function getLevel() {
	var level = Math.floor(score / 100);
	switch(level) {
		case 1: 
			speed = 1;
			sprite_number = 2;
			break;
		case 2:
			speed = 1;
			sprite_number = 3;
			break;
		case 3:
			speed = 2;
			sprite_number = 4;
			break;
		case 4:
			speed = 2;
			sprite_number = 5;
			break;
		case 5: 
			speed = 3;
			sprite_number = 5;
			break;
		case 6: 
			speed = 3;
			sprite_number = 6;
			break;
		case 7: 
			speed = 4;
			sprite_number = 7;
			break;
		case 8:
			speed = 4;
			sprite_number = 8;
			break;
	}
}
function getblood (x, y) {
	var died = {
		x: x,
		y: y
	};
	blood_list[blood_list.length] = died;
}

function updateblood() {
	if(blood_list.length > 0) {
		for(var i = 0; i < blood_list.length; i++) {
			context.drawImage(blood, blood_list[i].x, blood_list[i].y, 110, 110);
		}
	}
}

function restart() {
	speed = 1;
	score = 0;
	mana = 4;
	sprite_number = 1;
	run = true;
	end = false;
	boom_number = 3;
	highScore = sessionStorage.getItem("highscore");
	blood_list = new Array();
	refresh(sprite1);
	refresh(sprite2);
	refresh(sprite3);
	refresh(sprite4);
	refresh(sprite5);
	refresh(sprite6);
	refresh(sprite7);
	refresh(sprite8);
	sprite1.show = true;
	main();
}

function clicksprite(sprite, x, y) {
	if(sprite.click) {
		if(x >= sprite.startX && x <= sprite.startX + 110 && y >= sprite.startY && y <= sprite.startY + 110 ) {
			//sound_click.play();
			score += 10;
			mana++;
			sprite.click = false;
			sprite.show = false;
			sprite.dieX = sprite.startX;
			sprite.dieY = sprite.startY;
			sprite.stopX = sprite.endX;
			sprite.stopY = sprite.endY;
			for(var i = 0; i < sprite_number; i++)
			{
				random();
			}	
			getblood(sprite.dieX, sprite.dieY);
		}
	}
}

//event click on canvas

 function mouseDown(e) {
	score -= 5;
	mana--;
	var locationX = e.pageX - this.offsetLeft;
	var locationY = e.pageY - this.offsetTop;
	if(sprite1.show) {
		clicksprite(sprite1, locationX, locationY);
	}
	if(sprite2.show) {
		clicksprite(sprite2, locationX, locationY);
	}
	if(sprite3.show) {
		clicksprite(sprite3, locationX, locationY);
	}
	if(sprite4.show) {
		clicksprite(sprite4, locationX, locationY);
	}
	if(sprite5.show) {
		clicksprite(sprite5, locationX, locationY);
	}
	if(sprite6.show) {
		clicksprite(sprite6, locationX, locationY);
	}
	if(sprite7.show) {
		clicksprite(sprite7, locationX, locationY);
	}
	if(sprite8.show) {
		clicksprite(sprite8, locationX, locationY);
	}
	if(locationX > 175 && locationX < 325 && locationY > 175 && locationY < 325) {
		score += 5;
		run = true;
		mana++;
		main();
	}
	if((locationY > 0 && locationY < 40) && ((locationX > 380 && locationX < 420) || (locationX > 417 && locationX < 457) || (locationX > 454 && locationX < 494))) {
		boom_number--;
		getBoom();
	}
	var x_heart=160;
	for (var i=0; i<4; i++) {
		context_footer.clearRect( x_heart, 15, 50, 50);
		x_heart += 35;
	}

}


	function mouseDownPanel(e) {
	var locationX = e.pageX - this.offsetLeft;
	var locationY = e.pageY - this.offsetTop;
	if(locationX > 20 && locationX < 70 && locationY >= 15 && locationY <= 65) {
		if(run) {
			run = false;

		} else {

			main();
		}
	}
	if(locationX > 90 && locationX < 140 && locationY > 15 && locationY < 65) {
		restart();
	}
}

function main() {
	getLevel();
	if (sprite1.show) {
		updatesprite(sprite1);
	}
	if (sprite2.show) {
		updatesprite(sprite2);
	}
	if (sprite3.show) {
		updatesprite(sprite3);
	}
	if (sprite4.show) {
		updatesprite(sprite4);
	}
	if (sprite5.show) {
		updatesprite(sprite5);
	}
	if (sprite6.show) {
		updatesprite(sprite6);
	}
	if (sprite7.show) {
		updatesprite(sprite7);
	}
	if (sprite8.show) {
		updatesprite(sprite8);
	}
	if(mana == 0 || score<0) {
		run = false;
		end = true;
	}
	render();
	if(run) {
		cancelAnimationFrame(run_requestAnimation);
		run_requestAnimation = requestAnimationFrame(main);
	}
}

window.onload = function() {
	content = document.getElementById("canvas_content");
	footer = document.getElementById("canvas_footer");
	context = content.getContext("2d");
	context_footer = footer.getContext("2d");
	var windows = window;
	requestAnimationFrame = windows.requestAnimationFrame || windows.webkitRequestAnimationFrame || windows.msRequestAnimationFrame || windows.mozRequestAnimationFrame;
	main();
	content.addEventListener("click", mouseDown, false);
	footer.addEventListener("mousedown", mouseDownPanel, false);
}

