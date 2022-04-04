const test_server = 'http://localhost:3000/';

async function convertToJson(res) {
    const data = res.json()
    if (res.ok) {
      return data;
    } else {
      throw { name: 'servicesError', message: data};
    }
  }

export default class ExternalServices {

    getdata() {
        path = "../json/test.json"
        return fetch(path)
            .then(convertToJson)
            .then((data) => data.Result);
    }

    async login(user){
        // console.log(test_server + 'users?email_like=' + user.email)
        return await fetch(test_server + 'users?email_like=' + user.email).then(convertToJson);
    }

    async signup(user){
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      };
      return await fetch(test_server + 'users/', options).then(convertToJson);
    }

}