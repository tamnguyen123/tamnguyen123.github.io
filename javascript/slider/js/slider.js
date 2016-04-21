var ul;
var items;
var imageNumber;
var imageWidth;
var back, next;
var currentPostion = 0;
var imageNow = 0;

/*
* init(): 
*/
function init(){
	ul = document.getElementById('imageSlider');
	items = ul.children;
	imageNumber = items.length; // lấy số lg image
	//imageWidth = items[0].children[0].clientWidth;
	imageWidth = items[0].clientWidth;
	ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
	back = document.getElementById("back");
	next = document.getElementById("next");
	back.onclick = function(){ onClickback();};
	next.onclick = function(){ nextto();};
	var imageItem = null;
}

function nextto() {
	ul.style.left=parseInt(imageWidth + 960) + 'px';
}

function slideTo() {
	imageItem = items[4];
	imageItem.style.position='relative';
	imageItem.style.left = '0px';
	imageItem.style.left = parseInt(imageItem.style.left) - 100 + 'px';
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
	
	var start = new Date;
	//var id = setInterval(function(){
		/*var timePassed = new Date - start;
		var progress = timePassed / 1000;
		if (progress > 1){
			progress = 1;
		}*/progress = 1;
		var a = parseInt(currentPostion + direction * progress * imageWidth * numOfimageTo) + 'px';
		//ul.style.left = parseInt(currentPostion + direction * progress * imageWidth * numOfimageTo) + 'px';
		ul.style.left = parseInt(currentPostion - 100) + 'px';
		
		if (/*progress == 1*/ul.style.left==a){
			clearInterval(id);
			imageNow = imageTo;
		}
	//}, 3000);
setInterval(slideTo,3000);
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