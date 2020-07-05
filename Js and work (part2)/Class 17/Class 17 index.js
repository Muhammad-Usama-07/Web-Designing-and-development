// Starting class 17

// using predefine repeativelly function
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
*/
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

















