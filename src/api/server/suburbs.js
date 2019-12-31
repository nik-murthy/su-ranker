import axios from 'axios';

export default {
    fetchSuburbs () {
      return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data);
    }
  }