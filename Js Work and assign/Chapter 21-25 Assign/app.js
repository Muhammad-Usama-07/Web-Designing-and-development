// Question # 1
/*
var user1 = prompt("Enter your first name: ");
var user2 = prompt("Enter last first name: ");
var title = "Welcome "+user1+" "+user2+" to our website.";
alert(title);

// Question # 2
var phone = prompt("Enter your favorite mobile model: ");
document.write("Your Favorite mobile model is: "+phone+"<br>Leght of String: "+phone.length);

// Question # 3
var string = "Pakistani"
document.write("String: "+string+"<br>index of 'n': "+string.indexOf("n"))

// Question # 4
var string = "Hello World"
document.write("String: "+string+"<br>index of 'n': "+string.lastIndexOf("l"))

// Question # 5
var string = "Pakistani"
document.write("String: "+string+"<br>Character at index 3: "+string.charAt(3))

// Question # 6
var firstname = "Usama"
var lastname = " Rajput"
document.write("Welcome "+firstname.concat(lastname))
// Question # 7
var text = "Hyderabad"
var indexx = text.indexOf("Hyder");
var new_text = text.slice(0,indexx) + 'Islam' +text.slice(indexx+5);
document.write("City: "+text+"<br>")
document.write("After Replacment: "+new_text);

// Question # 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Your String is: "+message+"<br><br>");
var after_replace = message.replace(/and/g,"&");
document.write("String after replacement: "+after_replace);
// Question # 9
var str = "472";
var integar = Number(str);
document.write("value: "+str+" and its type: String<br><br>")
document.write("value: "+integar+" and its type: number")

// Question # 10
var userInput = prompt("Enter Your Text: ")
document.write("User Input: "+userInput+"<br><br>")
document.write("Upper Case: "+userInput.toUpperCase()+"<br>")

// Question # 11
var userInput = prompt("Enter Your Text: ");
var totitle = userInput.charAt(0).toUpperCase();
var string = totitle+userInput.slice(1);
document.write("User Input: "+userInput+"<br><br>");
document.write("Title Case: "+string+"<br>");

// Question # 12
var num  = 35.36;
var str = num.toString()
document.write("Number: "+num+"<br><br>")
document.write("Result: "+str.replace(".",""))

// Question # 13
    //frist method
var username = prompt("Enter Username");
var special_char =  ["!",",",".","@"];
for(var i = 0;i<=special_char.length-1;i++){
    if(username.includes(special_char[i]) ==true){
        alert("Please enter valid username");
        break;
    }
}
  //second method
var username = prompt("Enter Username");
var special_char =  ["!",",",".","@"];
if(username.includes("!") == true || username.includes(",") == true || username.includes(".") == true|| username.includes("@") == true){
    document.write("Please enter valid username")
}
else{
    document.write("Welcome")
}

// Question # 14
var user_Input = prompt("Enter What u want?")
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
for(var i = 0; i<=A.length-1; i++){
    if(user_Input == A[i].toUpperCase() || user_Input == A[i].toLowerCase() ){
        alert(user_Input.toLowerCase()+" is available at index "+i+" in our Bakery");
        break;
    }
}

for(var i=32;i<48;++i){
    document.write(String.fromCharCode(i)+"<br>");
}


// Question # 15

var password = prompt("Enter Password: \nPassword must contain numbers and alphabets");
var at0 = password.charAt(0);
var at1 = password.charAt(0);

if(at0 == Number(at0)){
    alert("Password can not begin with numbers\nPlease enter valid username")
}

else{
    if(password.length <= 6){
        alert("Welcome our web")
        }
    else{
        alert("Lenth must be less or equal to 6")
    }
}


// Question # 16

var university = "University of Karachi";
for(var i = 0; i<=university.length-1; i++){
    document.write(university.charAt(i)+"<br>")
}
  
// Question # 17
var string = prompt("Enter string: ");
document.write("User input: "+str+"<br>");
document.write("Last Character of input: "+string.charAt(string.length-1));
*/

// Question # 18

var text = "The quick brown fox jumps over the lazy dog"
var word = "The"
var ocurr = text.match(/The/g).length + text.match(/the/g).length;
document.write("Text: "+text+"<br>")
document.write("There are "+ocurr+" occurrence of word 'the'")














