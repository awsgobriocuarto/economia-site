import axios from "axios";
import Papa from "papaparse";

export default {
  list: async () => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQw6y9fTsHnM_AkEDD-b72tJBHkb6XA7k8HK1EOiJ5001AjCsPGG4yVzBys13E5wZQeMRkn7Q2tcfuV/pub?output=csv",
        { responseType: "blob" }
      )
      .then(
        (response) =>
          new Promise((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const items = results.data;
                return resolve(
                  items.map((item) => ({
                    ...item,
                  }))
                );
              },
              error: (error) => reject(error.message),
            });
          })
      );
  },
};
