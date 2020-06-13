var char = prompt("Enter character: ")
if(char >= 65 && char <= 90){
   document.write(" Alphabet ");
   }
else if(char >= 48 && char <= 57){
    document.write(" Digit ");
}
else{
    document.write(" Special Character ");

}