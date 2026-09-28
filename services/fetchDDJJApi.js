/**
 * fetchDDJJApi — SERVER SIDE (getStaticProps / API Routes)
 * Usa variable de entorno privada DDJJ_API_URL.
 * NUNCA se ejecuta en el browser.
 */
export default {
  list: async () => {
    const apiUrl = process.env.DDJJ_API_URL;
    if (!apiUrl) {
      console.error('[fetchDDJJApi] DDJJ_API_URL no configurada');
      return [];
    }

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const items = Array.isArray(json) ? json : json?.data;
      return Array.isArray(items) ? items : [];
    } catch (error) {
      console.error('[fetchDDJJApi] Error:', error.message);
      return [];
    }
  },
};
