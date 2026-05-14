/**
 * getDeclarations — CLIENT SIDE
 * Redirige al API Route interno /api/sheets/ddjj
 * La URL real de Google Sheets NUNCA llega al browser.
 */
export async function getDeclarations() {
  try {
    const res = await fetch('/api/sheets/ddjj');
    if (!res.ok) {
      console.error('[getDeclarations] Error:', res.status);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error('[getDeclarations] Error de red:', error);
    return [];
  }
}
