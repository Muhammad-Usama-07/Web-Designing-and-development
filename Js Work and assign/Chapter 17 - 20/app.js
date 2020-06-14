/*var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


for(var i = 0; i < 4; i++){
    for(var j = 0; j<4; j++){
        document.write(arr[i][j]);
    }
    document.write("<br>")
}

for(var i = 1; i<=10; i++){
    document.write(i+"<br>")
}

var table_num = prompt("Enter Table number: ");
var lenght = prompt("Enter lenght: ")
lenght = parseInt(lenght);
document.write("Multiplication of Table number "+table_num+" <br>Lenght "+lenght+"<br><br>")
for(var i = 1; i <=lenght; i++){
    document.write(table_num+"x"+i+"="+table_num*i+"<br>");
}


var fruits = ["apple", "banana", "mango", "orange","strawberry"];

for(var i = 0; i<fruits.length; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>")
}
document.write("<h3>Counting</h3><br><br>");

for(var i = 1; i<=15; i++){
    document.write(i+", ");
}
document.write("<h3>Reverse</h3><br><br>");

for(var j = 10; j>=1; j--){
    document.write(j+", ");
}
document.write("<h3>Even</h3><br><br>");

for(var k = 0; k<=20; k++){
    if(k%2 == 0){
        document.write(k+", ");
    }
    
}
document.write("<h3>Odd</h3><br><br>");

for(var k = 0; k<=20; k++){
    if(k%2 == 1){
        document.write(k+", ");
    }
    
}
document.write("<h3>Series</h3><br><br>");

for(var k = 1; k<=20; k++){
    if(k%2 == 0){
        document.write(k+"k, ");
    }
    
}
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("Welcome to Blue Ribbon bakery, What do you wnat to ordered ?");

for(var i = 0; i<=A.length; i++){
    if(search == A[i]){
        document.write(A[i]+" is available at the index of "+i);
        break;
    }
    else if(search != A[i]){
        document.write("We are sorry "+search+" is not available in our Bakery");
        break;
    }
}

var A = [24, 53, 78, 91, 12];

document.write("Array items: "+A);
var larg= 0;

for (i=0; i<=larg;i++){
    if (A[i]>larg) {
        var larg=A[i];
    }
}

document.write("<br>"+"The largest number is: "+larg)
*/


















