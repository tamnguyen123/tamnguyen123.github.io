var months=["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysofmonth=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now=new Date();
var checkdate = new Date().getDate();
var checkmonth = new Date().getMonth();
var checkyear = new Date().getFullYear();
var positionDayOne = 0;
var results = "";
var positionDateNow;

function showCalendar() {
    
    document.write("<form id='calendar'>");
    document.write("<table style='border:1px solid red'>");
    
    menuOfCalendar();
    insertNameOfDay();
    insertCalendar(now.getMonth(), now.getFullYear());
    document.write("</table>");
    document.write("</form>");
    
}



function menuOfCalendar() {
    document.write("<tr>");
    document.write("<td class='click' onClick='previousYear();'>&#8647;</td>");
    document.write("<td class='click' onClick='previousMonth();'>&larr;</td>");
    
    document.write("<td class='click' colspan='2'><select>");
    for (var i=0; i<months.length; i++) {
        document.write("<option value="+i+">"+months[i]+"</option>");
    }
    document.write("</select></td>");

    document.write("<td class='click'><select>");
    for (var i=1900; i<=2020; i++) {
        document.write("<option value='"+i+"'>"+i+"</option>");
    }
    document.write("</select></td>");

    document.write("<td class='click'onClick='nextMonth();'>&rarr;</td>");
    document.write("<td class='click' onClick='nextYear();'>&#8649;</td>");
    document.write("</tr>");
}


function insertNameOfDay() {
    document.write("<tr>");
    for (var i=0; i<days.length; i++) {
	document.write("<td>"+days[i]+"</td>");
    }
    document.write("</tr>");
}

function insertCalendar(month, year) {
    var count=1;
    for (var i=0; i<5; i++) {
        document.write("<tr>");
        for (var j=0; j<7; j++) {
            document.write("<td id='item"+count+"' class='item' ></td>");
            //document.getElementById('item'+count).innerHTML=count;
            count++;
        }
        document.write("</tr>");
    }
    setDate();
}

function setDate() {
    var datenow=new Date().getDate();
    var monthnow=new Date().getMonth();
    var yearnow=new Date().getFullYear();
    var day=0;

    var positionfirstday=new Date(yearnow, monthnow, 1).getDay();
    var numberdayofmonth=daysofmonth[monthnow];
    var positionlastday=positionfirstday+numberdayofmonth;
    var count=1;
    for (var i=0; i<5; i++) {
        for (var j=0; j<7; j++) {
            if (count>positionfirstday&&count<=numberdayofmonth+positionfirstday+1) {
                document.getElementById("item"+count).innerHTML=++day;
            }
            count++;
        }
    }
}


