function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};
  
    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
  
    return convertedJSON;
  }


document.querySelector('#signup').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("I made it")

    const password = document.querySelector('#password').value
    const password_check = document.querySelector('#password-check').value
    const email = document.querySelector('#email').value

    let element = document.querySelector('#signUpInputs').innerHTML


    if (password != password_check){
        element += '<p class="signUpError">Passwords must match!</p>'
        document.querySelector('#signUpInputs').innerHTML = element
        document.querySelector('#email').value = email
    }
    else{
        // alert("Passwords are the same.")
        const formElement = document.forms['sign-up'];
        const json = formDataToJSON(formElement);
        console.log(json)

    }


    
  });