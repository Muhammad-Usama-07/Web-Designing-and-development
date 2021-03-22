let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("pass");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((result) => {
            console.log(result)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });

}


let login = () => {
    let email = document.getElementById("loginemail");
    let password = document.getElementById("loginpass");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((result) => {
            console.log("User login Successfully");
            console.log(result);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
                // ...
        });

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}