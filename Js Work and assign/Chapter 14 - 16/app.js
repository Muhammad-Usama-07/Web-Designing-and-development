/*var arr = {"abc","asd","fffd","ddd"};
var arr2 = {12,13,14,15};

var arr3 = [];
var num = 5;     
for (var i = 0; i < num; i++) {
  arr3.push(false);
}*/

var arr4 = ["SSC", "HSC", "BCS",
"BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualification</h1><br><br>");
for(var i = 1; i<=arr4.length; i++){
    document.write(i+") "+arr4[i-1]+"<br>");
}