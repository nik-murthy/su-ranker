import suburbs from "./data/suburbsResponse.json";

const fetch = (mockData, time) => new Promise(
    resolve => setTimeout(() => {
        resolve(mockData.data);
    }, time),
  );

  export default {
    fetchSuburbs() {
      return fetch(suburbs, 0); // wait before returning posts
    }
  }