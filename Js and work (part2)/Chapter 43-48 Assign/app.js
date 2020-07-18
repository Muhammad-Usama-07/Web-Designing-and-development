// Starting Chapter 43-48
/*
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("thistable").deleteRow(i);
}


// Question # 4 

function chnageimage(){
    var chnageimg = document.getElementById('firstimage');
    chnageimg.src = "images/mib2.png";
}

function previmg(){
    var previmgg = document.getElementById('firstimage');
    previmgg.src = "images/mib1.png";
}
*/

// Question # 5
var counter = 0;
var incre_heading = document.getElementById('incr');
var stopdecreament = document.getElementById('decButton');
stopdecreament.disabled = true;

function incr(){
    counter++;
    var stopdecreament = document.getElementById('decButton');
    stopdecreament.disabled = false;
    incre_heading.innerHTML = counter;
    
}
function decr(){
    counter--;
    incre_heading.innerHTML = counter;
    
    if(counter == 0){
        var stopdecreament = document.getElementById('decButton');
        stopdecreament.disabled = true;
    }
    else{
    }
}