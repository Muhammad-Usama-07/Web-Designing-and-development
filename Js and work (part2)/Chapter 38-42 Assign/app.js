// Starting Chapter 38-42
/*
// Question # 1
function power(a, b) {
    a = a ** b;
    alert(a)
}
power(2, 3);


// Question # 2

function leapYear(year){
    var result; 
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
      alert("leap")
    }
    else{
      alert("not leep")
    }
 }
var year = prompt("Enter year: ");
leapYear(year)

// Question # 3

function triarea(a,b,c){
    var S = ( a + b + c ) / 2;
    var area = S * ((S-a)*(S-b)*(S-c));
    alert(area);
}

triarea(1,3,3);


// Question # 4


function average(sub1, sub2, sub3){
    var avg = (sub1+sub2+sub3)/3;
    return avg;
}
function percentage(){
    var perc = average(sub1,sub2,sub3)+"%";
    return perc
}
function mainfunction(sub1, sub2, sub3){
    alert("The average = "+average(sub1, sub2, sub3))
    alert("The percentage = "+percentage(sub1, sub2, sub3))
}

var sub1 = parseInt(prompt("Enter marks in subject 1"));
var sub2 = parseInt(prompt("Enter marks in subject 2"));
var sub3 = parseInt(prompt("Enter marks in subject 3"));
mainfunction(sub1, sub2, sub3);


// Question # 5

function checkindex(charr,string){
    for(var i = 0; i<=string.length; i++){
        if(string[i] == charr){
            alert("found at the index of: "+i)
            break;
        }
    }
}

var str = "hello";
checkindex("l",str)


// Question # 6

function deletvow(string){
    var new_str = ""; 
    
    for(var i = 0; i<=string.length; i++){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i'|| string[i] == 'o'|| string[i] == 'u'|| string[i] == 'A'|| string[i] == 'E'|| string[i] == 'I'|| string[i] == 'O'|| string[i] == 'U'){
            new_str = string.replace(/[aeiou]/g, "");
        }
    }
    alert(new_str);
}
var string = prompt("Enter String: ");
if(string.length <= 25){
    deletvow(string);
}
else{
    alert("lenght not be greater then 25")
}

// Question # 7 

function occure(text){
    var count_e = 0;
    var count_a = 0;
    for(var i = 0; i<=text.length; i++){
        if(text.charAt(i)=="e"){
           count_e++;
           }
        if(text.charAt(i)=="a"){
           count_a++;
           }
    }
    alert(count_e);
    alert(count_a);
}
var text ="Pleases read this application and give me gratuity";
occure(text);


// Question # 8
function meters(Km){
    var result = Km*1000;
    document.write("Your distance in meter is: "+result+"<br>")
    
} 
function feet(Km){
    var result = parseFloat(Km*3280.84);
    document.write("Your distance in feet is: "+result+"<br>")
} 
function inches(Km){
    var result = parseFloat(Km*39370.1);
    document.write("Your distance in inches is: "+result+"<br>")
} 
function centimeters(Km){
    var result = Km*100000;
    document.write("Your distance in meter is: "+result+"<br>")
}

var Km = parseInt(prompt("Enter distace in km: "));
meters(Km)
feet(Km)
inches(Km)
centimeters(Km)
*/

// Question # 9

function overtime(worked_hour){
    if(worked_hour <= 40 ){
        worked_hour*over_time_rate;
        alert("you didn't workred over time")
    }
    else if(worked_hour > 40 ){
        var result = worked_hou-40r; 
        alert("your over time salary is: "+result*over_time_rate)
    }
}

var worked_hour = parseInt(prompt("Enter your hours"))
var over_time_rate = 12.00;

overtime(worked_hour);











































































































