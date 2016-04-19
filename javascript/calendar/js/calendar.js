var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var checkDate = new Date().getDate();
var checkMonth = new Date().getMonth();
var CheckYear = new Date().getFullYear();
var positionDayOne = 0;
var results = "";
var positionDateNow;

/*
* create HTML calendar
*/
function createCalendar() {
    document.write("<link rel='stylesheet' type='text/css' href='style.css'/>");
    document.write("<form id='datepicker'>");
    document.write("<input type='text' id='date' name='date' onclick='showCalendar();'/>");
    document.write("<table id='calendar' style='display:none; border:2px solid #000;'>");
    menuOfCalendar();
    insertNameOfDay();
    insertCalendar(now.getMonth(), now.getFullYear());
    document.write("</table>");
    document.write("</form>");
 }

/*
* Show calendar when onClick element input#calendar
*/
function showCalendar() {
    document.getElementById("calendar").style.display = 'block';
}

/*
* Draw button previousYear, previousMonth, select month, select year, nextMonth, nextYear
*/
function menuOfCalendar() {
    document.write("<tr>");
    // draw button previousYear, button previousMonth
    document.write("<td class='click' onClick='preYear();' style='background-color:#a9cce3; color:#2e86c1; cursor:pointer;'>&#8647;</td>");
    document.write("<td class='click' onClick='preMonth();' style='background-color:#a9cce3; color:#2e86c1; cursor:pointer;'>&larr;</td>");
    
    // draw element select month
    document.write("<td class='click' colspan='2' style='background-color:#a9cce3;'><select id='months' onChange='changeMonth();' style='width:123px; height:26px; cursor:pointer;'>");
    for (var i = 0; i < months.length; i++) {
        document.write("<option value=" + i + ">"+ months[i] + "</option>");
    }
    document.write("</select></td>");

    // draw element select year
    document.write("<td class='click' style='background-color:#a9cce3;'><select id='years' onChange='changeYear();' style='width:59px; height:26px; cursor:pointer;'>");
    for (var i = 1910; i <= 2020; i++) {
        document.write("<option value='" + i + "'>" + i + "</option>");
    }
    document.write("</select></td>");

    // draw button nextYear, button nextMonth
    document.write("<td class='click'onClick='nextMonth();' style='background-color:#a9cce3; color:#2e86c1; cursor:pointer;'>&rarr;</td>");
    document.write("<td class='click' onClick='nextYear();' style='background-color:#a9cce3; color:#2e86c1; cursor:pointer;'>&#8649;</td>");
    document.write("</tr>");
}

/*
* draw name of day (eg:Sun, Mon, Tue...)
*/
function insertNameOfDay() {
    document.write("<tr>");
    for (var i = 0; i < days.length; i++) {
    document.write("<td style='color:#ff0000; font-size:18pt; font-weight:bold; background-color:#bebebe;'>" + days[i] + "</td>");
    }
    document.write("</tr>");
}

/*
*  draw 6 cols, 7 rows of table calendar
*/
function insertCalendar() {
    var count = 1;
    for (var i = 0; i < 6; i++) {
        document.write("<tr>");
        for (var j = 0; j < 7; j++) {
            document.write("<td id='item"+count+"' class='item' onClick='pickDay(" + count + ");'></td>");
            count++;
        }
        document.write("</tr>");
    }
    // insert date in 1 month
    setDate();

    document.getElementById("months").value = now.getMonth();
    document.getElementById("years").value = now.getFullYear();
}

/*
* Fill value day in element <td class='item'>
*/
function setDate() {
    var datenow = new Date().getDate();
    var monthNow = checkMonth;
    var yearNow = CheckYear;
    var day = 0;

    // check leap year
    if (((yearNow % 4 == 0) && (yearNow % 100 != 0)) || (yearNow % 400 == 0)) {
        daysOfMonth[1] = 29;
    } else {
        daysOfMonth[1] = 28;
    }

    var positionFirstDay = new Date(yearNow, monthNow, 1).getDay();
    var numberdayofmonth = daysOfMonth[monthNow];
    var positionlastday = positionFirstDay + numberdayofmonth;
    var count = 1;
    // 
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if ((count > positionFirstDay) && (count<= (numberdayofmonth + positionFirstDay))) {
                document.getElementById("item"+count).innerHTML = ++day;
                document.getElementById("item"+count).style.background = '#fff';
                document.getElementById("item" + count).style.cursor = 'pointer';
            }
            count++;
        }
    }
}

/*
* Clear value day in element <td class='item'>
*/
function clearCalendar() {
     for (var i = 1; i < 43; i++) {
        document.getElementById("item"+i).innerHTML = "";
        document.getElementById('item'+i).style.border = "none";
        document.getElementById("item"+i).style.background = '#2d2d2d';
    }
}

function changeMonth() {
    clearCalendar();
    checkMonth = document.getElementById("months").value;
    setDate();
}

function changeYear() {
    clearCalendar();
    CheckYear = document.getElementById("years").value;
    setDate();
}

function preMonth() {
    clearCalendar();
    checkMonth--;
    if (checkMonth < 0) {
        checkMonth = 11;
        CheckYear--;
        document.getElementById("years").value = CheckYear;
    }
    document.getElementById("months").value = checkMonth;
    setDate();
}

function preYear() {
    clearCalendar();
    CheckYear--;
    document.getElementById("years").value = CheckYear;
    setDate();
}

function nextMonth() {
    clearCalendar();         
    checkMonth++;
    if (checkMonth > 11) {
        checkMonth=0;
        CheckYear++;
        document.getElementById("years").value = CheckYear;
    }
    document.getElementById("months").value = checkMonth;
    setDate();
}
//
function nextYear() {
    clearCalendar();
    CheckYear++;
    document.getElementById("years").value = CheckYear;
    setDate();
}
/*
*
*
*/
function pickDay(position) {
    var pickmonth = checkMonth + 1;
    var pickyear = CheckYear;
    var pickday = document.getElementById("item" + position).innerHTML;
    var date = pickday + '/' + pickmonth + '/' + pickyear;
    if (pickday != "") {
        document.getElementById("date").value = "";
        document.getElementById("date").value = date;
    }
     document.getElementById('calendar').style.display = 'none';
}