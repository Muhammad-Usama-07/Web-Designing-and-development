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

function check(){
    var score = 0;
    var Q1rightanswer = document.getElementById('q1a2');
    var Q2rightanswer = document.getElementById('q2a1');
    var Q3rightanswer = document.getElementById('q3a4');
    var Q4rightanswer = document.getElementById('q4a3');
    if(Q1rightanswer.checked == true){
        alert("your answer is write");
        score = score+5;
        
    }
    else if(Q2rightanswer.checked == true){
        alert("your answer is write");
        score = score+5;
    }
    else if(Q3rightanswer.checked == true){
        alert("your answer is write");
        score = score+5;
    }
    else if(Q4rightanswer.checked == true){
        alert("your answer is write");
        score = score+5;
    }
    else{
        alert("your answer is wrong");
        score = score-5;
    }
}*/
var webcouse = {
    t1: "ali",
    t2: "ghouse",
    t3: "basit"

}

console.log(webcouse);