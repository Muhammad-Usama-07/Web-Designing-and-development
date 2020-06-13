/*var user = prompt("Enter city: ");
if(user =="Karachi"){
    alert("Welcome to the city of lights");
}

var user = prompt("Write your gender: ");
if(user =="male"){
    alert("Good Morning sir");
}
else if(user =="female"){
    alert("Good Morning Ma'am");

}
var user = prompt("Enter Signal Colour: ");
if(user =="Red"){
    alert("Must be Stop");
}
else if(user =="Yellow"){
    alert("Ready to move");
}
else if(user =="Green"){
    alert("Move now");
}
var current_fuel= parseInt(prompt("Enter Fuel in car: "));
if(current_fuel <0.25){
    alert("Please refill the fuel in your car");
}
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");

}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


 if (true){
alert("True");
}
if (false){
alert("False");
}


 if("car" < "cat"){
alert("car is smaller than cat");
}

var total_marks = 300;
var obtained_marks = prompt("Enter obtained marks: ");
obtained_marks =  parseInt(obtained_marks)
var percentage = (obtained_marks/total_marks)*100;
percentage =  parseInt(percentage)

document.write("<h1>Mark Sheet</h1><br><br>")
document.write("<br>Total Marks: "+total_marks)
document.write("<br>Marks Obtained: "+obtained_marks)
if(percentage >=80){
    document.write("<br>Percentage: "+percentage+"%")
    document.write("<br>Grade: A-one")
    document.write("<br>Remarks: Excellent")
}
else if(percentage >=70){
    document.write("<br>Percentage: "+percentage+"%")
    document.write("<br>Grade: A")
    document.write("<br>Remarks: Good")
}
else if(percentage >=60){
    document.write("<br>Percentage: "+percentage+"%")
    document.write("<br>Grade: B")
    document.write("<br>Remarks: you need to imrove")
}
else if(percentage <60){
    document.write("<br>Percentage: "+percentage+"%")
    document.write("<br>Grade: Fail")
    document.write("<br>Remarks: Sorry")
}

var num = prompt("Enter any number from 1-10: ");

for(var i = 1; i<=10; i++){
    if(num == i){
        document.write("Bingo! Correct answer");
        break;
    }
    else if(num == i+1){
        document.write("Close enough to the correct answer");
        break;
    }
}

var num = prompt("Enter number: ");
num = parseInt(num);
var result = num%2;
if(result == 1){
    document.write("number is odd");
   }
else if(result == 0){
    document.write("number is even");
}*/

var temp = prompt("Enter Temperature: ");
if(temp > 40){
    document.write("It is too hot outside.");
   }
else if(temp > 30){
    document.write("The Weather today is Normal.");
}
else if(temp > 20){
    document.write("Today’s Weather is cool.");
}
else if(temp > 10){
    document.write("OMG! Today’s weather is so Cool.");
}























