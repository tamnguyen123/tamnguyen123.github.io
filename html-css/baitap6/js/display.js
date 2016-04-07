// check open or close of content
var flag=false;
var flag2=false;
var flag3=false;

// func show/hide of content
function hide(num) {
	if(num==1) {
		if(!flag) {
			document.getElementById("content1").style.display = "none";
			document.getElementById("close1").src = "images/close-arrows.png";
			flag=true;
		}
		else{
			document.getElementById("content1").style.display = "block";
			document.getElementById("close1").src = "images/open-arrow.png";
			flag=false;
		}
	}
	else if(num==2) {
		if(!flag2) {
			document.getElementById("content2").style.display = "block";
			document.getElementById("close2").src = "images/open-arrow.png";
			flag2=true;
		}
		else {
			document.getElementById("content2").style.display = "none";
			document.getElementById("close2").src = "images/close-arrows.png";
			
			flag2=false;
		}
	}
	else {
		if(!flag3) {
			document.getElementById("content3").style.display = "block";
			document.getElementById("close3").src = "images/open-arrow.png";
			flag3=true;
		}
		else {
			document.getElementById("content3").style.display = "none";
			document.getElementById("close3").src = "images/close-arrows.png";
			
			flag3=false;
		}
	}
}



