var list = document.getElementById('list')

function addtodo(){
    var todo = document.getElementById('todo-item');
    var li = document.createElement('li');
    var litest = document.createTextNode('Ghous')
    li.appendChild(litest)
    console.log(li)
}