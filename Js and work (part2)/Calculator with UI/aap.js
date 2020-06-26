function on(){
    var result = document.getElementById('result');
    result.style.backgroundColor = 'white' ;
    result.value = "";
}
function of(){
    var result = document.getElementById('result');
    result.style.backgroundColor = '737373' ;
    result.value = "";
}
function getNumber(num){
    var result = document.getElementById('result');
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}