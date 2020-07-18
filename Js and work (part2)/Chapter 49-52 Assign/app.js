// Question # 01

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