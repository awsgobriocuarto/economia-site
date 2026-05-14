import axios from 'axios';

/**
 * fetchLegislations — SERVER SIDE (getStaticProps / API Routes)
 * Usa variable de entorno privada GOOGLE_SCRIPT_URL.
 * NUNCA se ejecuta en el browser.
 */
export default {
  list: async () => {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error('[fetchLegislations] GOOGLE_SCRIPT_URL no configurada');
      return [];
    }

    return axios
      .get(`${scriptUrl}?sheet=legislacion`)
      .then((response) => {
        let items = response.data;
        if (items && !Array.isArray(items) && Array.isArray(items.data)) {
          items = items.data;
        }
        if (Array.isArray(items)) {
          return items.map((item) => ({ ...item }));
        }
        return [];
      })
      .catch((error) => {
        console.error('[fetchLegislations] Error:', error.message);
        return [];
      });
  },
};
