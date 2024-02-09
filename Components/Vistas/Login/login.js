
function collectAndSubmit() {

    let email = $("#email").val();
    let password = $("#password").val();


    let formData = {
        "email": email,
        "password": password
    };


    console.log(JSON.stringify(formData));
}

