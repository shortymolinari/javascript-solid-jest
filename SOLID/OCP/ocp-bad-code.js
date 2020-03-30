var axios = require('axios');

class TodoExternalService {

    requestTodoItems(callback) {
        const url = 'https://jsonplaceholder.typicode.com/todos/';

       return axios
            .get(url)
            .then(callback)
    }
}

new TodoExternalService().requestTodoItems(response => console.log(response.data))