var list = document.getElementById('list')

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
    dltbtn.setAttribute("onclick", "deletbtun()")
    
    li.appendChild(dltbtn)
    
    list.appendChild(li);
    todoitem.value = "";
    console.log(li)
}