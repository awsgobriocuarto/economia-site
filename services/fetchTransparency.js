import axios from "axios";

export default {
  list: async () => {
    return axios
      .get(
        "https://script.google.com/macros/s/AKfycbx0KK4zSjV5ihJg0UjT1-v26UlE_9evWIRYcsNds6gW4yqaOlc8gYGMWcPBHGEA-51y/exec?sheet=informacion_economica"
      )
      .then((response) => {
        let items = response.data;

        // Si los datos vienen dentro de una propiedad 'data'
        if (items && !Array.isArray(items) && Array.isArray(items.data)) {
          items = items.data;
        }

        if (Array.isArray(items)) {
          return items.map((item) => ({
            ...item,
          }));
        }
        return [];
      })
      .catch((error) => {
        console.error("Error fetching Transparency: ", error);
        return [];
      });
  },
};
