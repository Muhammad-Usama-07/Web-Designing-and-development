// Constructor function

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