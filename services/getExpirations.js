import moment from 'moment';

/**
 * getExpirations — CLIENT SIDE
 * Redirige al API Route interno /api/sheets/vencimientos.
 * La URL real de Google Sheets NUNCA llega al browser.
 */
export async function getExpirations() {
  const today = moment().format('YYYY-MM-DD');

  try {
    const res = await fetch('/api/sheets/vencimientos');
    if (!res.ok) {
      console.error('[getExpirations] Error:', res.status);
      return [];
    }
    const data = await res.json();

    // Filtrar y ordenar por fecha en el cliente
    return data
      .filter((item) => item.fecha && Date.parse(item.fecha) >= Date.now())
      .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  } catch (error) {
    console.error('[getExpirations] Error de red:', error);
    return [];
  }
}
