/*
//Counting from 1 to 100
for(var i =1; i<=100;i= i+10){
    
    for(var b=i; b<=i+9; b++){
        document.write(b + " ")
    }
        document.write("<br>")
}

// Converting string to lower case

var city = prompt("Enter city: ");
city = city.toLowerCase();
alert("u entered: "+city);


// Converting string to upper case

var city = prompt("Enter city: ");
city = city.toUpperCase();
alert("u entered: "+city);



// Check for double space program
var str = prompt("Enter some text: ");
var numChar = str.length;
for(var i = 0; i< numChar; i++)
{
    if(str.slice(i, i+2)==="  "){
        alert("NO double Spaces!");
        break;
    }
}

// Replacing sentence in a text program in java script.
var text = "The New Yorker magazine doesn't allow the phrase "+"World War II. "+" They say it should be "+"the Second World War." +" So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. "

for (var i = 0; i < text.length; i++) {
if (text.slice(i, i + 12) === "World War II") {
text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
}
}

document.write(text);
*/
// Short method of Replacing sentence in a text program in java script.
var text = "The New Yorker magazine doesn't allow the phrase 'World War II. ' They say it should be 'the Second World War.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."
var indexx = text.indexOf("World War II");
var new_text = text.slice(0,indexx) + 'The Second World War' +text.slice(indexx+12);
document.write(new_text);





















