/*// Question # 1
var num = 3.45214;
document.write("number: "+num+"<br>");
document.write("round off value: "+Math.round(num)+"<br>");
document.write("floor value: "+Math.floor(num)+"<br>");
document.write("ceil value: "+Math.ceil(num));


// Question # 2
var num = -2.673;
document.write("number: "+num+"<br>");
document.write("round off value: "+Math.round(num)+"<br>");
document.write("floor value: "+Math.floor(num)+"<br>");
document.write("ceil value: "+Math.ceil(num));


// Question # 3
var num = -4;
document.write("The absolute value of "+num+" is "+Math.abs(num));

// Question # 4
var num = Math.floor(Math.random()*6)+1;
document.write("The random value of "+num);

// Question # 5
var num = Math.floor(Math.random()*2)+1;
if(num == 1){
    document.write("Random con value: Head");
}
else if(num == 2){
    document.write("Random con value: Tails");
}

// Question # 6
var num = Math.floor(Math.random()*100)+1;
if(num == 84){
    document.write("random number between 1 and 100: "+num);
}

// Question # 7
var weight = prompt("Enter your weight in kilogram")
var b ;
document.write("The weight of user is ")
for(var i = 0; i<=weight.length-1;i++){
    var a = weight.charAt(i);
    if(a <= parseFloat(a)){
        //a = a.toString() 
        document.write(a)
        
    }
}
document.write(" Kilograms")
*/

// Question # 8

var input = prompt("Enter number from 1-10");
input = parseInt(input);
var i =0;
while(i<=10){
    i++;
    var num = Math.floor(Math.random()*i)+1;
    if(num == input){
        alert("Congrtas");
        break
    }
    else{
        alert("Try Again");
        break;
    }
    
}














