// Question # 01
/*
function gdet(){
    var classs = document.getElementById('submit');
    classs.style.display = "none"
    var name = document.getElementById('name');
    var fname = document.getElementById('Fname');
    var Id = document.getElementById('id');
    var cont = document.getElementById('cont');
    document.write('Your name: '+name.value+"<br>")
    document.write('Your father name: '+fname.value+"<br>")
    document.write('Your Id: '+Id.value+"<br>")
    document.write('Your contact: '+cont.value+"<br>")
}
*/

// Question # 02
function readmore() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta."
    var pretext = document.getElementById("para");
    pretext.innerHTML = text;
    
    
}