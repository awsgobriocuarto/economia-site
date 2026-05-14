import axios from 'axios';
import Papa from 'papaparse';

/**
 * fetchExpirations — SERVER SIDE (getStaticProps)
 * Usa variable de entorno privada GOOGLE_SHEET_VENCIMIENTOS_URL.
 * NUNCA se ejecuta en el browser.
 */
const today = Date.now();

function dateFilter(date) {
  const expirationDate = Date.parse(date.fecha);
  return expirationDate >= today;
}

export default {
  list: async () => {
    const sheetUrl = process.env.GOOGLE_SHEET_VENCIMIENTOS_URL;
    if (!sheetUrl) {
      console.error('[fetchExpirations] GOOGLE_SHEET_VENCIMIENTOS_URL no configurada');
      return [];
    }

    return axios
      .get(sheetUrl, { responseType: 'blob' })
      .then(
        (response) =>
          new Promise((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              skipEmptyLines: true,
              complete: (results) => {
                const items = results.data;
                const filteredItems = items
                  .filter(dateFilter)
                  .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
                resolve(filteredItems.map((item) => ({ ...item })));
              },
              error: (error) => reject(error.message),
            });
          })
      )
      .catch((error) => {
        console.error('[fetchExpirations] Error:', error.message);
        return [];
      });
  },
};
