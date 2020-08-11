/*var list = document.getElementById('list')

function addtodo(){
    var todoitem = document.getElementById('todo-item');
    
    // creating li tag with text node 
    var li = document.createElement('li');
    var litest = document.createTextNode(todoitem.value)
    li.appendChild(litest);
    
    // creating delet button  
    var dltbtn = document.createElement("button");
    var dlttext = document.createTextNode("DELETE");
    dltbtn.appendChild(dlttext);
    dltbtn.setAttribute("class","btn");
    dltbtn.setAttribute("onclick", "deletbtun(this)")
    
    
    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("Edit");
    editbtn.appendChild(edittext);
    editbtn.setAttribute("onclick", "edititem(this)")
    
    li.appendChild(dltbtn)
    li.appendChild(editbtn)
    
    list.appendChild(li);
    todoitem.value = "";
    console.log(li)
}

function deletbtun(e){
    e.parentNode.remove();
}

function deletall(){
    list.innerHTML = "";
}

function edititem(e){
    var val  = e.parentNode.firstChild.nodeValue
    var editvalue = prompt("Enter new Value:",val);
    e.parentNode.firstChild.nodeValue = editvalue;
    
}
*/