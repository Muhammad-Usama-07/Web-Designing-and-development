/*var a = 10;
document.write("Result:<br>")
document.write("The value of a is :"+a)
document.write("<br>...................................<br><br>")
var b = ++a;
document.write("The value of a is ++a:"+a)
document.write("<br>Now the value of a is :"+a+"<br><br>")
a++;
document.write("The value of a is ++a:"+b)
document.write("<br>Now the value of a is :"+a+"<br><br>")
--a;
document.write("The value of a is ++a:"+b)
document.write("<br>Now the value of a is :"+a+"<br><br>")
a-- ;
document.write("The value of a is ++a:"+b)
document.write("<br>Now the value of a is :"+a+"<br><br>")
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is "+a)
document.write("<br>b is "+b)
document.write("<br>result is "+result)

var user = prompt("Enter Name:");
alert("Welcome "+user);

var x = (prompt("Enter number: "));
var a = 5;
document.write("<h2>Table</h2><br>")
for(var i =1; i<=10; i++){
    if(x = parseInt(x)){
        
        document.write(x+"x"+i+"="+x*i+"<br>")
    }
    else{
        document.write(a+"x"+i+"="+a*i+"<br>")
    }
}*/

var sub1 = prompt("Enter first Subject name: ")
var sub2 = prompt("Enter second Subject name: ")
var sub3 = prompt("Enter third Subject name: ")
var obt_marks1 = parseInt(prompt("Enter obtained marks in "+sub1))
var obt_marks2 = parseInt(prompt("Enter obtained marks in "+sub2))
var obt_marks3 = parseInt(prompt("Enter obtained marks in "+sub3))
var total_marks = 100;
var percentage1 = (obt_marks1/total_marks)*100
var percentage2 = (obt_marks1/total_marks)*100
var percentage3 = (obt_marks1/total_marks)*100
document.write("<h3>Subject Total Marks Otained Percentage</h3><br>")
document.write(sub1+" "+total_marks+"      "+obt_marks1+"            "+percentage1+"%<br>");
document.write(sub2+" "+total_marks+"      "+obt_marks2+"            "+percentage2+"%<br>");
document.write(sub3+" "+total_marks+"      "+obt_marks3+"            "+percentage3+"%");



















