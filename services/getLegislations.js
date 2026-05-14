/**
 * getLegislations — CLIENT SIDE
 * Redirige al API Route interno /api/sheets/legislacion.
 * La URL real de Google/Heroku NUNCA llega al browser.
 */
export async function getLegislations() {
  try {
    const res = await fetch('/api/sheets/legislacion');
    if (!res.ok) {
      console.error('[getLegislations] Error:', res.status);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error('[getLegislations] Error de red:', error);
    return [];
  }
}
