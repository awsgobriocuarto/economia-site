import axios from "axios";
import Papa from "papaparse";

export default {
  list: async () => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQAkqqe84boctfrd57Ij-d5aujuVlE3olqT0tRV7D7qeS8kcUEMqNrw0d9l6GeKFKMmrEYn_AKtCBd/pub?output=csv",
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
