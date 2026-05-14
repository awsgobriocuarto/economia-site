import axios from 'axios';
import Papa from 'papaparse';

/**
 * fetchDDJJ — SERVER SIDE (getStaticProps / API Routes)
 * Usa variable de entorno privada GOOGLE_SHEET_DDJJ_URL.
 * NUNCA se ejecuta en el browser.
 */
export default {
  list: async () => {
    const sheetUrl = process.env.GOOGLE_SHEET_DDJJ_URL;
    if (!sheetUrl) {
      console.error('[fetchDDJJ] GOOGLE_SHEET_DDJJ_URL no configurada');
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
              complete: (results) => resolve(results.data.map((item) => ({ ...item }))),
              error: (error) => reject(error.message),
            });
          })
      )
      .catch((error) => {
        console.error('[fetchDDJJ] Error:', error.message);
        return [];
      });
  },
};
