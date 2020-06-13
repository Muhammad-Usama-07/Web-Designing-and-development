/*var char = prompt("Enter character: ")
if(char >= 65 && char <= 90){
   document.write(" Alphabet ");
   }
else if(char >= 48 && char <= 57){
    document.write(" Digit ");
}
else{
    document.write(" Special Character ");

}

var num1 = prompt("Enter numebr 1: ")
var num2 = prompt("Enter numebr 2: ")
if(num1>num2){
   document.write("first number greater than second.")
   }
else{
    document.write("second number greater than first.")
}*/

var num = prompt("Enter numebr: ");
num = parseInt(num);
if(num>0){
   document.write("number is positive.");
   }
else if(num<0){
    document.write("number is negative.");
}
else{
    document.write("number is equal to zero.");
}