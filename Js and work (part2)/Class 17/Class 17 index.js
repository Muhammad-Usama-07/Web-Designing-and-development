// Starting class 17

// using predefine repeativelly function => time required in miliseconds
    // running function to 1 second
/*
function timer(){
    document.write("runing<br>");
}
setInterval(timer,1000)

// using predefine stop function
    // stop function to 3 second
function timeout(){
    document.write("runing<br>");
}
setTimeout(timeout,3000);

// Stopping steInterval function
var count = 0;
var interval;
function timer(){
    count++;
    document.write(count+"<br>");
}
interval = setInterval(timer,1000);

setTimeout(function(){
    clearInterval(interval);
},3000);
*/

// Making stop watch

var min = 0;
var sec = 0;
var msec = 0;
var minheading  = document.getElementById('min');
var secheading  = document.getElementById('sec');
var msecheading  = document.getElementById('msec');
var interval;

function timer(){
    msec++;
    msecheading.innerHTML = msec;
    if(msec >= 100){
       sec++;
        secheading.innerHTML = sec;
        msec = 0;
       }
    else if(sec>=60){
            min++;
            sec = 0;
            minheading.innerHTML = min;
            }
}
interval = setInterval(timer, 10)
















