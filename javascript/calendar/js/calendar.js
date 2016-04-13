var months=["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayofmonth=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now=new Date();
var checkdate = new Date().getDate();
var checkmonth = new Date().getMonth();
var checkyear = new Date().getFullYear();
var positionDayOne = 0;
var results = "";
var positionDateNow;

function openCalendar() {
    document.write("<form id='calendar'");
    document.write("<table>");
    menuOfCalendar();
    insertNameOfDay();
    insertCalendar(now.getMonth(), now.getFullYear());
    document.write("</table>");
    document.write("</form>");
}



function menuOfCalendar() {
    document.write("<tr>");
    document.write("<td class="click" onClick='PreviousYear();'>&#8647;</td>");
    document.write("<td class='click' onClick='PreviousMonth();'>&larr;</td>");
    dropDownMonth();
    dropDownYear();
    document.write("<td class='click'onClick='NextMonth();'>&rarr;</td>");
    document.write("<td class='click' onClick='NextYear();'>&#8649;</td>");
    document.write("</tr>");
}

function dropDownMonth() {
    document.write("<td class='click' span='2'><select>");
    for (var i=0; i<months.length; i++) {
        document.write("<option value="+i+">"+months[i]+"</option>");
    }
    document.write("</select></td>");
}

function dropDownYear() {
    document.write("<td class='click'><select>");
    for (var i=1900; i<=2020; i++) {
        document.write("<option value='"+i+"'>"+i+"</option>");
    }
    document.write("</select></td>");
}

function insertNameOfDay() {
    document.write("<tr>");
    for (var i=0; i<day.length; i++) {
	document.write("<td>"+day[i]+"</td>");
    }
    document.write("</tr>");
}

function insertCalendar(month, year) {
    var count=1;
    for (var i=0; i<6; i++) {
	document.write("<tr onClick='hideCal();'>");
	for (var j=0; j<7; j++) {
	    document.write("<td id='item"+count+"' onClick='checkDay("+count+");'></td>");
	    count++;
	}
	document.write("</tr>");
    }
    setData();
    setMonths();
    setYears();
}

function setData() {
    var date=new Date().getDate();
    var month=new Date().getMonth();
    var year=new Date().getFullYear();
    var day=new Date(checkyear, checkmonth, 1).getDay();
    positiondayone=parseInt(day);
    var previousmonth=checkmonth-1;
    var nextmonth=checkmonth+1;

    if (((checkyear%4==0)&&(checkyear%100!=0)) || (checkyear%400==0)) {
	dayofmonth[1]=29;
    } else {
    	dayofmonth[1]=28;
    }

    if (previousmonth<0) {
        previousmonth=11;
    }

    if (nextmonth==12) {
        nextmonth=0;
    }

    var numberday=dayofmonth[checkmonth];
    var numberdaypreviousmonth=dayofmonth[previousmonth];
    var numberdaynextmonth=dayofmonth[nextmonth];

    var position=1;
    var count=1;
    var check=false;
    var start=day;
    var stop=(parseInt(numberday)+parseInt(day));

    for (var i=0; i<6; i++) {
        for (var j=0; j<7; j++) {
            if (count>=day) {
                check=true;
            }
            if (check && position<=numberday) {
                document.getElementById("item"+(position+day)).innerHTML=position;
                document.getElementById("item"+(position+day)).style.background="#FBFCFC";
                if (now==position && month==checkmonth && year==checkyear) {
                    document.getElementById("item"+(position+day)).style.background="#00ace6";
                    positionDateNow="item"+(position+day);
                }
                document.getElementById("item"+(position+day)).style.color="#000";
                position++;
            }
            count++;
        }
    }
    for (var i=start; i>0; i--) {
        document.getElementById("item"+(i)).innerHTML=numberdaypreviousmonth--;
        document.getElementById("item"+(i)).style.color="#fff";
    }
    for (varj=1; j<=(42-stop); j++) {
        document.getElementById("item"+(j+stop)).innerHTML=j;
        document.getElementById("item"+(j+stop)).style.color="#fff";
    }
}

function setItem(item, value) {
    var item=document.getElementById(item);
    item.innerHTML=value;
}

function showCalendar() {
    document.getElementById("calendar").style.display="block";
}

function hideCalendar() {
    document.getElementById("calendar").style.display="none";
}

function previousMonth() {
    clear();
    checkmonth=checkmonth-1;
    if (checkmonth<0) {
        checkmonth=11;
        checkyear=checkyear-1;
    }
    console.log(checkmonth);
    setData();
    setMonths();
    setYears();
}

function nextMonth() {
    erase();
    checkmonth=checkmonth+1;
    if (checkmonth>11) {
        checkmonth=0;
        checkyear=checkyear+1;
    }
    console.log(checkmonth);
    setData();
    setMonths();
    setYears();
}

function previousYear() {
    erase();
    checkyear = checkyear - 1;
    console.log(checkmonth);
    setData();
    setMonths();
    setYears();
}

function nextYear() {
    erase();
    checkyear = checkyear + 1;
    console.log(checkmonth);
    setData();
    setMonths();
    setYears();
}

function changeMonth() {
    erase();
    checkmonth = document.getElementById("months").value;
    console.log(checkmonth);
    setData();
}

function setMonths() {
    document.getElementById("months").value = checkmonth;
}

function setYears() {
    document.getElementById("years").value = checkyear;
}

function changeYear() {
    erase();
    checkyear = document.getElementById("years").value;
    console.log(checkmonth);
    setData();
}

function checkDay(position) {
    var previous_month = checkmonth;
    var month_now = checkmonth + 1;
    var next_month = checkmonth + 2
    var year = checkyear;
    var day = document.getElementById("item" + position).innerHTML;

    if (previous_month == 0) {
        previous_month = 12;
    }

    if (next_month == 13) {
        next_month = 1;
    }

    if (parseInt(day) > position) {
        if (previous_month == 12) {
            year--;
        }
        var results = day + "/" + previous_month + "/" + year;
    } else if (parseInt(day) < (position - positionDayOne)) {
        if (next_month == 1) {
            year++;
        }
        var results = day + "/" + next_month + "/" + year;
    } else {
        var results = day + "/" + month_now + "/" + year;
    }

    document.getElementById("output").value = results;
}

function erase() {
    for (var i = 1; i <= 42; i++) {
        document.getElementById("item" + i).innerHTML = "";
        document.getElementById("item" + i).style.background = "none";
    }
}

function setDateNowForInput() {
    results = checkdate + "/" + (checkmonth + 1) + "/" + checkyear;
    document.getElementById("output").value = results;
}
