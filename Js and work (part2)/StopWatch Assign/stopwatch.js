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