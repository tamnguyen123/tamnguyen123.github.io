var ul;
var items;
var imageNumber;
var imageWidth;
var back, next;
var currentPostion = 0;
var imageNow = 0;

/*
* create variable when slider load 
*/
function init(){
	ul = document.getElementById('imageSlider');
	items = ul.children;
	imageNumber = items.length; 
	imageWidth = items[0].clientWidth;
	ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
	back = document.getElementById("back");
	next = document.getElementById("next");
	back.onclick = function(){ onClickback();};
	next.onclick = function(){ onClickNext();};
	var imageItem = null;
	document.getElementById("item0").style.background = "#A70018";
}

/*
* run slider when click button
* imageTo: index images next compare to index current image
*/
function slideTo(imageTo){
	// direct run image next or previous
	var direction;
	var numberImageTo = Math.abs(imageTo - imageNow);

	if (imageNow > imageTo) {
		direction = 1;
	} else {
		direction = -1;
	}
	
	currentPostion = -1 * imageNow * imageWidth;
	
	var start = new Date;
	var id = setInterval(function(){
		var time = new Date - start;
		var progress = time / 1000;
		if (progress > 1){
			progress = 1;
		}
		ul.style.left = parseInt(currentPostion + direction * progress * imageWidth * numberImageTo) + 'px';
		document.getElementById("item" + imageNow).style.background = "#43A8D4";
		document.getElementById("item" + imageTo).style.background = "#A70018";
				
		if (progress == 1){
			clearInterval(id);
			imageNow = imageTo;
		}
	}, 20); // 20: time slide to next image (2s)

}

/*
* Slide to next image
*/
function onClickback(){
	if (imageNow == 0){
		slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(imageNow - 1);
	}		
}

/*
* Slide to previous image
*/
function onClickNext(){
	if (imageNow == imageNumber - 1){
		slideTo(0);
	}		
	else{
		slideTo(imageNow + 1);
	}		
}
window.onload = init;