import suburbs from "./data/suburbsResponse.json";
import suburb from "./data/suburbResponse.json";

const fetch = (mockData, time) => new Promise(
    resolve => setTimeout(() => {
        resolve(mockData);
    }, time),
  );

  export default {
    fetchSuburbs() {
      return fetch(suburbs, 0); // wait before returning posts
    },
    fetchSuburb() {
      return fetch(suburb.data, 0);
    }
  };