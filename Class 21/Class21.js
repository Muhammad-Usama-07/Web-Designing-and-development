// Constructor function

function Student(name, roll) {
    this.name = name;
    this.roll = roll
    this.getname = function() {
        return name;
    }
}

var student = new Student("ghous", 123)
console.log(student.getname())