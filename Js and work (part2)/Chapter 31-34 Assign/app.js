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

// Question # 7
var current = new Date();
var current_hour = current.getHours();
if(current_hour >= 0 && current_hour < 12){
    alert("It's AM");
}
else if(current_hour >= 12 && current_hour <= 23){
    alert("It's PM");
}

// Question # 8
var month = 11;
var Last_d_Last_m = new Date(2020, month+1, 0 );
alert(Last_d_Last_m)

// Question # 9
var date1 = new Date("06/18/2015"); 
var date2 = new Date("04/24/2020"); 
  
// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
document.write(Difference_In_Days +" days have passed since 1st Ramzan, 2015"); 


// Question # 10
var date1 = new Date("01/01/2015");
var date2 = new Date("12/05/2015"); 
  
// To calculate the time difference of two dates 
var Difference_In_Time = (date2.getTime() - date1.getTime())/1000; 
  
Difference_In_Time = (Difference_In_Time/60)*60; 
  
//To display the final no. of days (result) 
document.write("On reference date "+date2+"<br>"); 
document.write(Difference_In_Time +" seconds have passed since Beginning, 2015"); 

// Question # 11
var current = new Date();
document.write("current date: "+current+"<br>")
var pre = current.setHours(current.getHours()-1);
document.write("1 hour ago, it was : "+current+"<br>")

// Question # 12
var current = new Date();
document.write("current date: "+current+"<br>")
var pre = current.setDate(current.getDate()-100);
var pre2 = current.setFullYear(current.getYear()-100)
document.write("100 years back, it was : "+current+"<br>")

// Question # 13
var age = prompt("Enter your age: ");
age = parseInt(age);
var birthday = new Date();
document.write("Your age is: "+age+"<br>");
document.write("Your Birth Year is: "+(birthday.getFullYear()-age)+"<br>");
*/
// Question # 14
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "aug", "Sep", "Oct", "nov", "Dec"]
var current = new Date();
var current_month = current.getMonth();
var charge_per_unit = 16;
var late_payment = 350;
var Customar_name = prompt("Enter Your name: ");
var NO_of_units = prompt("Tell me NO: of units");

//Net Amount Payable (within Due Date)
var NAP = NO_of_units*charge_per_unit;
//Gross Amount Payable (after Due Date)
var GAP = NAP+late_payment;


document.write("<h2>K-Electric Bill</h2><br><br>");
document.write("Customar Name: "+Customar_name+"<br>");
document.write("Month: "+months[current_month]+"<br>");
document.write("Number of units: "+NO_of_units+"<br>");
document.write("Charge per unit: "+charge_per_unit+"<br><br>");
document.write("Net Amount Payable (within Due Date): "+NAP+"<br>");
document.write("Late payment surcharge: "+late_payment+"<br>");
document.write("Gross Amount Payable (after Due Date): "+GAP+"<br>");
















