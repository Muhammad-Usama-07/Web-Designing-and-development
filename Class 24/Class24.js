// array desturcturing 
// let arr = ["ghous", "basit", "umair"]

// let [name1, name2, name3] = arr;
// console.log(name1)

// Function Expression

// let fo = function() {
//     console.log("helloo")
// }
// fo()

// Arrow function

// let hello = (name1, name2) => {
//     console.log(`hello ${name1} and ${name2}`)
// }
// hello("ghous", "basit")

// let hello = () => "Ghous"

// console.log(hello())


// Call Back
// *********

// let getData = (render_data) => {
//     setTimeout(() => {
//         render_data("Ghous")
//     }, 3000)
// }
// let render_data = (name) => {
//     console.log(name)
// }

// getData(render_data)

//  Higher order function(Array Function)
//  *************************************


// let arr = [{ name: "ghous", age: 30 }, { name: "basit", age: 20 }]

// let filter = arr.filter(function(a) {
//     return a.age === 20;
// })

// console.log(filter)

// let arr = [{ name: "ghous", age: 30 }, { name: "basit", age: 20 }]

// let filter = arr.filter(a => a.age > 10)

// console.log(filter)

// Search Method
// *************

// let name = "Ghous";
// let search = "G";

// if (name.startsWith(search)) {
//     console.log("Working")
// } else {
//     console.log("Notworking")
// }


// let name = "Ghous";
// let search = "s";

// if (name.endsWith(search)) {
//     console.log("Working")
// } else {
//     console.log("Notworking")
// }