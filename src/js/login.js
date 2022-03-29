import ExternalServices from "./externalServices";

const services = new ExternalServices();

function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};
  
    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
  
    return convertedJSON;
  }

  async function login(user){
    try {
      const res = await services.login(user);
      console.log(res);
      // document.location = '../';
    } catch (err) {
      console.log(err);
    }
  };



 document.querySelector('#loginbutton').addEventListener('click', (e) => {
    e.preventDefault();
    

    const formElement = document.forms['login'];
    const json = formDataToJSON(formElement);
    console.log(json)

    login(json)
    
  });

