/**
 * fetchDDJJApi — SERVER SIDE
 * Usa variable de entorno privada GOOGLE_SCRIPT_DDJJ_URL.
 * NUNCA se ejecuta en el browser.
 */
export function getDeclarations() {
  const apiURL = process.env.GOOGLE_SCRIPT_DDJJ_URL;
  if (!apiURL) {
    console.error('[fetchDDJJApi] GOOGLE_SCRIPT_DDJJ_URL no configurada');
    return Promise.resolve([]);
  }

  return fetch(apiURL)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((json) => {
      let items = json;
      if (items && !Array.isArray(items) && Array.isArray(items.data)) {
        items = items.data;
      }
      return Array.isArray(items) ? items : [];
    })
    .catch((error) => {
      console.error('[fetchDDJJApi] Error:', error.message);
      return [];
    });
}
