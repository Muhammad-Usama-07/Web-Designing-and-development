// Constructor function
/*
function Student(name, roll) {
    this.name = name;
    this.roll = roll;
}

var student = new Student("ghous", 123)
console.log(student.getname())

// function in prototype.
Student.prototype.getname = function() {
    return this.name;
}



// check property is exits or not.

var student = {
    name: "basit",
    roll: 134
}

console.log("roll" in student)



// print all properties in object.

var student = {
    name: "basit",
    roll: 134,
    name2: "saylani"
}

for (var prop in student) {
    console.log(prop)
}



// print all value of property of object.

var student = {
    name: "basit",
    roll: 134,
    name2: "saylani"
}

for (var prop in student) {
    console.log(student[prop])
}



// Method 2 check property is exits or not.
var student = {
    name: "basit",
    roll: 134,
    name2: "saylani"
}

console.log(student.hasOwnProperty("name2"))

*/

function saveData() {
    var name = document.getElementById('name');
    var roll = document.getElementById('roll');
    var key = firebase.database().ref('Todo app data/').push().key;
    var student = {
        name: name.value,
        roll: roll.value,
        key: key

    }
    firebase.database().ref('student/' + key).set(student)

}