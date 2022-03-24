function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};
  
    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
  
    return convertedJSON;
  }




document.querySelector('#loginbutton').addEventListener('click', (e) => {
    e.preventDefault();
    

    const formElement = document.forms['login'];
    const json = formDataToJSON(formElement);
    console.log(json)
    
  });