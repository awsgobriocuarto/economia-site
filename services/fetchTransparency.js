import axios from "axios";
import Papa from "papaparse";

export default {
  list: async () => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbkYiA-WUsEpMjucZ-4rdk6ctYAWKaMXYEfQKIjLg69Y-3MMhGDbs7WABRsdCLxhBKe4HI7mDyCERC/pub?output=csv",
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
