var date = new Date();
var month = date.getMonth();
var yyyy = date.getFullYear();
var day = date.getDay();
var febDays;

var days_month = [31,febDays,31,30,31,30,31,31,30,31,30,31]
var name_Days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
var day_Week = [0,1,2,3,4,5,6]
var monthName = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var monthNumber = [0,1,2,3,4,5,6,7,8,9,10,11]

var nameofmonth = document.querySelector(".monthName")
for (let n = 0; n < 12; n++) {
    if (monthNumber[n] == month) {
        nameofmonth.innerHTML = `<div>
        <h1>
        ${monthName[month]}  ${yyyy} </h1>
        </div>`
    }   
}

var nameofdays = document.querySelector(".calendar-weekDays")
let nod = "";
for (let j = 0; j < 7; j++) {
    nod += `<div> ${name_Days[j]} </div>`
    nameofdays.innerHTML = nod;
    
}

var y = yyyy;
if ((y % 4 == 0) && (y % 100 !== 0 || (y%400 == 0))) {
    febdays = 29;
    
}else {
    febdays = 28;
}

for (let i = 0; i < 13; i++) {
    if (i == month) {
        days_month = days_month[i];
    }
}
