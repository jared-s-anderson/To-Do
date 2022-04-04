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
      if (res.length == 0){
        alert("Wrong Email or Password.")
      }
      else{
        console.log(res);
        localStorage.setItem("userID", res[0].id)
      }

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

