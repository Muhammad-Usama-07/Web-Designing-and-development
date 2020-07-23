// Step (i) (ii) done
/*
var a = document.getElementById('main-content');
console.log(a.childNodes);
*/
// Step (iii) done

var a = document.getElementById('main-content');
var renderr = a.getElementsByClassName('render')

for(var i= 0; i<=renderr.length-1; i++){
    console.log(renderr[i].innerHTML)
}
































