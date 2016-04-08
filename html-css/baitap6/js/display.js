// func show/hide of content
function showhideContent(position) 
{
    var attrdisplay=document.getElementById("content"+position).style.display;
    if(attrdisplay!="none") {
        document.getElementById("content"+position).style.display="none";
        document.getElementById("close"+position).src="images/close-arrows.png";
    }
    else {
        document.getElementById("content"+position).style.display="block";
        document.getElementById("close"+position).src="images/open-arrow.png";
    }
}	


