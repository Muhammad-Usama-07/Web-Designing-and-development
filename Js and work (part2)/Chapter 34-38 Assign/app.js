/*
// Question # 01
var current = new Date();
alert(current);

// Question # 02
function greeting(var1, var2){
    alert("Welcome "+var1+" "+var2);
}
var firstname = prompt("Enter first name: ");
var lastname = prompt("Enter last name: ");
greeting(firstname,lastname);

// Question # 03
function Addition(var1, var2){
    alert("The addition of the numbers is: "+(var1+ var2));
}
var firstname = prompt("Enter first number: ");
firstname = parseInt(firstname);
var lastname = prompt("Enter last number: ");
lastname = parseInt(lastname)
Addition(firstname,lastname);
*/
// Question # 04
function addition(var1, var2, operator){
    var1 = parseInt(var1);
    var2 = parseInt(var2);
    switch(operator){
        case "+":
            var result = var1+var2;
            alert("The addition of "+var1+" and "+var2+" is "+result);
            break;
        case "-":
            var result = var1-var2;
            alert("The subtraction from of "+var1+" and "+var2+" is "+result);
            break;
        case "*":
            var result = var1*var2;
            alert("The Multiplication of "+var1+" and "+var2+" is "+result);
            break;
        case "/":
            var result = var1/var2;
            alert("The Division from "+var1+" and "+var2+" is "+result);
            break;
        case "%":
            var result = var1%var2;
            alert("The mode from "+var1+" and "+var2+" is "+result);
            break;
           
           }
}

var operator = prompt("Enter operator: \n1. +\n2. -\n3. *\n4. /\n5. %");
var firstnumber = prompt("Enter first number: ");
var lastnumber = prompt("Enter last number: ");
firstnumber = parseInt(firstnumber);
firstnumber = parseInt(firstnumber);
addition(firstnumber,lastnumber, operator);
// Question # 05
// Question # 06
// Question # 07
// Question # 08
// Question # 09
// Question # 10
// Question # 11
// Question # 12
// Question # 13
// Question # 14