var ul;
var items;
var imageNumber;
var imageWidth;
var back, next;
var currentPostion = 0;
var imageNow = 0;


/*
* 
*/
function init(){
	ul = document.getElementById('imageSlider');
	items = ul.children;
	imageNumber = items.length;
	ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
	back = document.getElementById("back");
	next = document.getElementById("next");
	back.onclick = function(){ onClickback();};
	next.onclick = function(){ onClickNext();};
}

function slideTo(imageTo){
	var direction;
	var numOfimageTo = Math.abs(imageTo - imageNow);
	

	if (imageNow > imageTo) {
		direction = 1;
	} else {
		direction = -1;
	}
	
	currentPostion = -1 * imageNow * imageWidth;
}

function onClickback(){
	if (imageNow == 0){
		slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(imageNow - 1);
	}		
}

function onClickNext(){
	if (imageNow == imageNumber - 1){
		slideTo(0);
	}		
	else{
		slideTo(imageNow + 1);
	}		
}

window.onload = init;