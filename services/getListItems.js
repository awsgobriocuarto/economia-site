import axios from "axios";
import Papa from "papaparse";

export default {
  list: async () => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTksvNMhYA0ZsL3Xy0Xb8sqi4r7kbRwSQZo-HafVvS8Aup5PVJ7c_n-y642TYhZzWZ_DoAu4pZzIv2G/pub?output=csv",
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
                    urlExternal: Boolean(item.urlExternal.toLowerCase()),
                  }))
                );
              },
              error: (error) => reject(error.message),
            });
          })
      );
  },
};
