const axios = require('axios');

export class ClientWrapper{
  makeGetRequest(url, callback){
	  return axios
      .get(url)
		  .then(callback);
  }
}
