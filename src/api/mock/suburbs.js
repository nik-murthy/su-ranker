import suburbs from "./data/suburbs.json";

const fetch = (mockData, time) => new Promise(
    resolve => setTimeout(() => {
        resolve(mockData);
    }, time),
  );

  export default {
    fetchSuburbs() {
      return fetch(suburbs, 0); // wait before returning posts
    }
  }