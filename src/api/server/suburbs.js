import axios from 'axios';

export default {
  fetchSuburbs(searchCriteria) {
    var queryString = "";
    if (searchCriteria.sort != undefined && searchCriteria.sort == "Demographics") {
      queryString += "sortBy=dem";
    } else {
      queryString += "sortBy=rel";
    }
    if (searchCriteria.state != undefined) {
      queryString += "&state=" + searchCriteria.state;
    }
    if (searchCriteria.mmp != undefined & searchCriteria.mmp != '') {
      queryString += "&mmp=" + searchCriteria.mmp;
    }
    if (searchCriteria.type != undefined) {
      if (!searchCriteria.type)
        queryString += "&type=unit";
    }
    if (searchCriteria.page != undefined) {
      queryString += "&pageNo=" + searchCriteria.page;
    }        
    if (queryString === "") {
      return axios
        .get(`${process.env.VUE_APP_SU_API_BASE_URL}/suburbs`)
        .then(response => response.data);
    } else {
      return axios
        .get(`${process.env.VUE_APP_SU_API_BASE_URL}/suburbs?${queryString}`)
        .then(response => response.data);
    }
  }
}