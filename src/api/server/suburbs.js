import axios from 'axios';

export default {
    fetchSuburbs () {
      console.log(`${process.env.VUE_APP_SU_API_BASE_URL}`);
      return axios
        .get(`${process.env.VUE_APP_SU_API_BASE_URL}/suburbs`)
        .then(response => response.data);
    }
  }