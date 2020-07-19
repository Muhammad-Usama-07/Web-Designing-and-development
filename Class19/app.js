var list = document.getElementById('list')

function addtodo(){
    var todoitem = document.getElementById('todo-item');
    var li = document.createElement('li');
    var litest = document.createTextNode(todoitem.value)
    li.appendChild(litest);
    list.appendChild(li)
    console.log(li)
}