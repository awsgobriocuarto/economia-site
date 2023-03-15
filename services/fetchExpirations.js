import axios from "axios";
import Papa from "papaparse";

const today = Date.now();

function dateFilter(date) {
  const expirationDate = Date.parse(date.fecha);
  return expirationDate >= today;
}

export default {
  list: async () => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8Qh48E-WY0wG58VljlKgLiTsrtOADoZYaJg7A12D3a_A2QAb0TCbmk7pXoiPZvLPm5WIRe5qNQB2B/pub?output=csv",
        { responseType: "blob" }
      )
      .then(
        (response) =>
          new Promise((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const items = results.data;
                const filteredItems = items.filter(dateFilter);
                return resolve(
                  filteredItems.map((item) => ({
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
