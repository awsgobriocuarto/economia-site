import axios from "axios";

export default {
  list: async () => {
    return axios
      .get(
        "https://script.google.com/macros/s/AKfycbzuMFJ-6cnbzQxiwQa2bi2wW29IfQPwdxzfy59dA8rQpUQ_fuQAz1ctxQHBMHhXlCxjQQ/exec?section=fetchEscalaSalarial"
      )
      .then((response) => {
        const items = response.data;
        if (Array.isArray(items)) {
          return items.map((item) => ({
            ...item,
          }));
        }
        return [];
      })
      .catch((error) => {
        console.error("Error fetching Escala Salarial: ", error);
        return [];
      });
  },
};
