/* question # 01
function showiage(e){
    console.log(e)
    var modelimg = document.getElementById('modelimage');
    modelimg.src = e.src;
}
*/

// question # 02

fontsize = 1;

function zoomin(){
    fontsize += 10;
    var para = document.getElementById('para')
    para.style.fontSize = fontsize+"px"
    
}

function zoomout(){
    fontsize -= 10;
    var para = document.getElementById('para')
    para.style.fontSize = fontsize+"px"
    
}



