/*var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


for(var i = 0; i < 4; i++){
    for(var j = 0; j<4; j++){
        document.write(arr[i][j]);
    }
    document.write("<br>")
}

for(var i = 1; i<=10; i++){
    document.write(i+"<br>")
}*/

var table_num = prompt("Enter Table number: ");
var lenght = prompt("Enter lenght: ")
lenght = parseInt(lenght);
document.write("Multiplication of Table number "+table_num+" <br>Lenght "+lenght+"<br><br>")
for(var i = 1; i <=lenght; i++){
    document.write(table_num+"x"+i+"="+table_num*i+"<br>");
}
