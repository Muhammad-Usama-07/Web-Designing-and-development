/*
// Using Math function.

// Using math.round 
var a = 1.3;
var b = 1.6;
var result = Math.round(a);
var result2 = Math.ceil(a);
var result3 = Math.floor(b);
document.write(result+"\n"+result2+"\n"+result3);


// generating random numbers

document.write(Math.random())
*/

// Creating head tail game
var headUser = prompt("Enter Head User: ");
var tailUser = prompt("Enter Tail User: ");
var toss = Math.random()*2;
var floor = Math.floor(toss);
if(floor==0){
   alert("'tails' "+tailUser+" wins")
   }
else{
    alert("'heads' "+headUser+" wins")
}






































































