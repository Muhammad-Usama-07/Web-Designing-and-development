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
function square(var1){
    alert("The Square of the number is: "+(var1* var1));
}
var num = prompt("Enter number: ");
num = parseInt(num);
square(num);

// Question # 06
function square(var1){
    var num = 1;
    for(var i = var1; i>=1;i--){
        num = i*num;
        
    }
    alert("factorial of "+var1+" is "+num);
}
var num = prompt("Enter number: ");
num = parseInt(num);
square(num);

// Question # 07
function count(var1, var2){
    
    for(var i = var1; i<=var2;i++){
        document.write(i+"<br>")
        
    }
}
var start = prompt("Enter start: ");
var end = prompt("Enter end: ");
start = parseInt(start);
end = parseInt(end);
count(start, end);
*/
 
// Question # 08
function calculateHypotenuse(var1, var2){
    
    function calculateSquare(var3){
        var result =  (var3*var3);
        return result;
    }
    var bas = calculateSquare(var1);
    var per = calculateSquare(var2);
    var Hypotenuse = bas+per;
    Hypotenuse = Math.sqrt(Hypotenuse)
    alert("Hypotenuse = "+Hypotenuse);
}
var base = prompt("Enter base:");
base = parseInt(base);
var perpendicular = prompt("Enter perpendicular:");
perpendicular = parseInt(perpendicular);
calculateHypotenuse(base, perpendicular);

// Question # 09
// Question # 10
// Question # 11
// Question # 12
// Question # 13
// Question # 14














