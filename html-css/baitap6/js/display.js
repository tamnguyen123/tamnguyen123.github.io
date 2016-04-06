var flag1=true;
var flag2=true;
var flag3=true;
function hide1(){
	if(flag1){
		document.getElementById("content1").style.display = "none";
		/*document.getElementsByClassName("close").style.background = 'url("images/top-movie-trailers-arrows.gif") no-repeat 0 -22';*/
		document.getElementById("close1").src = "images/open-arrow.png";
		flag1=false;
	}
	else{
		document.getElementById("content1").style.display = "block";
		document.getElementById("close1").src = "images/close-arrows.png";
		flag1=true;
	}
}

function hide2(){
	if(flag2){
		document.getElementById("content2").style.display = "block";
		document.getElementById("close2").src = "images/close-arrows.png";
		flag2=false;
	}
	else{
		
		document.getElementById("content2").style.display = "none";
		document.getElementById("close2").src = "images/open-arrow.png";
		flag2=true;
	}
}

function hide3(){
	if(flag3){
		document.getElementById("content3").style.display = "block";
		document.getElementById("close3").src = "images/close-arrows.png";
		flag3=false;
	}
	else{
		
		document.getElementById("content3").style.display = "none";
		document.getElementById("close3").src = "images/open-arrow.png";
		flag3=true;
	}
}

