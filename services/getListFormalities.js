import axios from "axios";
import Papa from "papaparse";

export default {
  list: async () => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ22EIsPbklOLRR-H8qHdPsiDn1yVew3_1ANCkNg52Rq5rdx0W2DjVgE0VTTyRFotJWcN8LJWNLO_H1/pub?output=csv",
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
