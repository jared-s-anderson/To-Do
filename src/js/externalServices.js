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

    async getDataByUser(userID){
      return await fetch(test_server + 'tasks?users_like=' + userID).then(convertToJson);
    }

    async getDataByID(id){
      return await fetch(test_server + 'tasks?users_like=' + id).then(convertToJson);
    }

    async addToDo(todo){
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      };
      return await fetch(test_server + 'tasks/', options).then(convertToJson);
    }

    async delete(id){
      const options = {
        method: 'DELETE'
      };
      return await fetch(test_server + 'tasks?id_like=' + id, options).then(convertToJson);
    }

}