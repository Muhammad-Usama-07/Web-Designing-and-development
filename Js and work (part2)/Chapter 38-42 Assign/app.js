// Starting Chapter 38-42
/*
// Question # 1
function power(a, b) {
    a = a ** b;
    alert(a)
}
power(2, 3);
*/

// Question # 2
/*
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
*/
// Question # 3

function triarea(a,b,c){
    var S = ( a + b + c ) / 2;
    var area = S * ((S-a)*(S-b)*(S-c));
    alert(area);
}

triarea(1,3,3);

