/*// Question # 1
var date = new Date();
document.write(date);

// Question # 2
var month = new Date();
var current_month = month.getMonth();

if(current_month == 5){
    alert("Current month: June")
}


// Question # 3
var current = new Date();
var current_day = current.getDay();
var day_list = ["Sun", "Mon","Tue","Wed","Thus","Fri","Sat"]
alert("Today is "+day_list[current_day])

// Question # 4
var current = new Date();
var current_day = current.getDay();
if(current_day == 0 || current_day == 6){
    alert("It's Fun day")
}
else{
    alert("It's Normal today")
}

// Question # 5
var current = new Date();
var current_date = current.getDate();
if(current_date < 16){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}

// Question # 6
var current = new Date();
var current_date = current.getDate();
var current_milisec = current.getTime();
document.write("Current Date: "+current+"<br>")
document.write("Elapsed milisecond since January 1, 1970: "+current_milisec+"<br>")
document.write("Elapsed minutes since January 1, 1970: "+current_milisec*1.6667e-5+"<br>")
*/
// Question # 7
var current = new Date();
var current_hour = current.getHours();
if(current_hour >= 0 && current_hour < 12){
    alert("It's AM");
}
else if(current_hour >= 12 && current_hour <= 23){
    alert("It's PM");
}
// Question # 1





















