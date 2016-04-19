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


function init() {
    document.write("<link rel='stylesheet' type='text/css' href='style.css'/>");
    document.write("<form id='datepicker'>");
    document.write("<input type='text' id='date' name='date' onclick='showCalendar();'/>");
    createCalendar();
    document.write("</form>");
}

function createCalendar() {
    document.write("<table id='calendar' style='display:none; border:2px solid #000;' >");
    menuOfCalendar();
    insertNameOfDay();
    insertCalendar(now.getMonth(), now.getFullYear());
    document.write("</table>");
 }
function showCalendar() {
    document.getElementById("calendar").style.display='block';
}



function menuOfCalendar() {
    document.write("<tr>");
    document.write("<td class='click' onClick='preYear();' style='background-color:#a9cce3; color:#2e86c1; cursor:pointer;'>&#8647;</td>");
    document.write("<td class='click' onClick='preMonth();' style='background-color:#a9cce3; color:#2e86c1; cursor:pointer;'>&larr;</td>");
    
    document.write("<td class='click' colspan='2' style='background-color:#a9cce3;'><select id='months' onChange='changeMonth();' style='width:123px; height:26px; cursor:pointer;'>");
    for (var i=0; i<months.length; i++) {
        document.write("<option value="+i+">"+months[i]+"</option>");
    }
    document.write("</select></td>");

    document.write("<td class='click' style='background-color:#a9cce3;'><select id='years' onChange='changeYear();' style='width:59px; height:26px; cursor:pointer;'>");
    for (var i=1910; i<=2020; i++) {
        document.write("<option value='"+i+"'>"+i+"</option>");
    }
    document.write("</select></td>");

    document.write("<td class='click'onClick='nextMonth();' style='background-color:#a9cce3; color:#2e86c1; cursor:pointer;'>&rarr;</td>");
    document.write("<td class='click' onClick='nextYear();' style='background-color:#a9cce3; color:#2e86c1; cursor:pointer;'>&#8649;</td>");
    document.write("</tr>");
}


function insertNameOfDay() {
    document.write("<tr>");
    for (var i=0; i<days.length; i++) {
    document.write("<td style='color:#ff0000; font-size:18pt; font-weight:bold; background-color:#bebebe;'>"+days[i]+"</td>");
    }
    document.write("</tr>");
}

function insertCalendar() {
    var count=1;
    for (var i=0; i<6; i++) {
        document.write("<tr>");
        for (var j=0; j<7; j++) {
            document.write("<td id='item"+count+"' class='item' onClick='pickDay("+count+");'></td>");
            //document.getElementById('item'+count).innerHTML=count;
            count++;
        }
        document.write("</tr>");
    }
    setDate();
    document.getElementById("months").value=now.getMonth();
    document.getElementById("years").value=now.getFullYear();
}

function setDate() {
    var datenow=new Date().getDate();
    var monthnow=checkmonth;
    var yearnow=checkyear;
    var day=0;
    if (((yearnow%4==0)&&(yearnow%100!=0)) || (yearnow%400==0)) {
        daysofmonth[1]=29;
    } else {
        daysofmonth[1]=28;
    }
 
    var positionfirstday=new Date(yearnow, monthnow, 1).getDay();
    var numberdayofmonth=daysofmonth[monthnow];
    var positionlastday=positionfirstday+numberdayofmonth;
    var count=1;
    for (var i=0; i<6; i++) {
        for (var j=0; j<7; j++) {
            if (count>positionfirstday&&count<=numberdayofmonth+positionfirstday) {
                document.getElementById("item"+count).innerHTML=++day;
                document.getElementById("item"+count).style.background='#fff';
                document.getElementById("item"+count).style.cursor='pointer';   
            }
            count++;
        }
    }
}

// 
function clearCalendar() {
     for (var i=1; i<43; i++) {
        document.getElementById("item"+i).innerHTML="";
        document.getElementById('item'+i).style.border="none";
        document.getElementById("item"+i).style.background='#2d2d2d';
    }
}

function changeMonth() {
    clearCalendar();
    checkmonth=document.getElementById("months").value;
    setDate();
}

function changeYear() {
    clearCalendar();
    checkyear=document.getElementById("years").value;
    setDate();
}

function preMonth() {
    clearCalendar();
    checkmonth--;
    if (checkmonth<0) {
        checkmonth=11;
        checkyear--;
        document.getElementById("years").value=checkyear;
    }
    document.getElementById("months").value=checkmonth;
    setDate();
}

function preYear() {
    clearCalendar();
    checkyear--;
    document.getElementById("years").value=checkyear;
    setDate();
}

function nextMonth() {
    clearCalendar();
    checkmonth++;
    if(checkmonth>11) {
        checkmonth=0;
        checkyear++;
        document.getElementById("years").value=checkyear;
    }
    document.getElementById("months").value=checkmonth;
    setDate();
}

function nextYear() {
    clearCalendar();
    checkyear++;
    document.getElementById("years").value=checkyear;
    setDate();
}

function pickDay(position) {
    var pickmonth=checkmonth+1;
    var pickyear=checkyear;
    var pickday=document.getElementById("item"+position).innerHTML;
    var date=pickday+'/'+pickmonth+'/'+pickyear;
    if (pickday!="") {
        document.getElementById("date").value="";
        document.getElementById("date").value=date;
    }
     document.getElementById('calendar').style.display='none';
}