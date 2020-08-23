var list = document.getElementById('list');

function addtodo() {
    var todoitem = document.getElementById('todo-item');
    if (todoitem.value == "") {
        alert("Please enter any value")
    } else {
        // Connecting Firebase Database.
        //*****************************/
        var key = firebase.database().ref('Todo app data/').push().key;
        var student = {
            Task: todoitem.value,
            key: key

        }
        firebase.database().ref('Todo app data/' + key).set(student)
            // Data Added //

        // Get Data from firebase
        // ********************** 
        var task;
        var keyy;
        var arrr = "";
        var ref = firebase.database().ref('Todo app data');
        ref.on('value', gotdata)

        function gotdata(data) {
            console.log(data.val())
            var todoappdata = data.val();
            var keyss = Object.keys(todoappdata);
            console.log(keyss);
            for (var i = 0; i < keyss.length; i++) {
                var k = keyss[i];
                task = todoappdata[k].Task;
                keyy = todoappdata[k].key;
                console.log(task, keyy);
                if (task == todoitem.value) {
                    console.log(task)
                    arrr = task;
                }

            }

        }
        //***********************/


        // creating li tag with text node 
        var li = document.createElement('li');
        var litest = document.createTextNode(arrr)
        li.appendChild(litest);

        // creating delet button  
        var dltbtn = document.createElement("button");
        dltbtn.style.marginLeft = "88px";
        var dlttext = document.createTextNode("DELETE");
        dltbtn.appendChild(dlttext);
        dltbtn.setAttribute("class", "btn");
        dltbtn.setAttribute("onclick", "deletbtun(this)")


        var editbtn = document.createElement("button");
        editbtn.style.marginLeft = "10px";
        var edittext = document.createTextNode("Edit");
        editbtn.appendChild(edittext);
        editbtn.setAttribute("onclick", "edititem(this)")

        li.appendChild(dltbtn)
        li.appendChild(editbtn)

        list.appendChild(li);
        todoitem.value = "";
        console.log(li)
    }


}

function deletbtun(e) {
    var task;
    var keyy;
    var todoItem = document.getElementById("Todo-item");
    var val = e.parentNode.firstChild.nodeValue;

    var ref = firebase.database().ref('Todo app data');
    ref.on('value', gotdata)

    function gotdata(data) {
        console.log(data.val())
        var todoappdata = data.val();
        var keyss = Object.keys(todoappdata);
        console.log(keyss);
        for (var i = 0; i < keyss.length; i++) {
            var k = keyss[i];
            task = todoappdata[k].Task;
            keyy = todoappdata[k].key;
            console.log(task, keyy);
            if (task == val) {
                firebase.database().ref('Todo app data/' + k).remove();
            }

        }

    }
    e.parentNode.remove();
}

function deletall() {
    list.innerHTML = "";
}

function edititem(e) {
    var val = e.parentNode.firstChild.nodeValue
    var editvalue = prompt("Enter new Value:", val);
    e.parentNode.firstChild.nodeValue = editvalue;

}