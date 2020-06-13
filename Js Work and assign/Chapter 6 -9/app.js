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
alert("Welcome "+user);*/

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
}
