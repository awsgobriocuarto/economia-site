import Papa from 'papaparse';

// Whitelist de hojas permitidas — evita acceso arbitrario
const ALLOWED_SHEETS = [
  'boletin_oficial',
  'informacion_economica',
  'legislacion',
  'escala_salarial',
  'ddjj',
  'vencimientos',
];

export default async function handler(req, res) {
  const { sheet } = req.query;

  // 1. Validar que la hoja solicitada esté en la whitelist
  if (!ALLOWED_SHEETS.includes(sheet)) {
    return res.status(403).json({ error: 'Hoja no permitida' });
  }

  try {
    let targetUrl = '';

    // 2. Mapeo interno a URLs privadas (variables de entorno sin NEXT_PUBLIC_)
    switch (sheet) {
      case 'vencimientos':
        targetUrl = process.env.GOOGLE_SHEET_VENCIMIENTOS_URL;
        break;
      case 'ddjj':
        targetUrl = process.env.GOOGLE_SHEET_DDJJ_URL;
        break;
      default:
        // Hojas del Apps Script compartido
        targetUrl = `${process.env.GOOGLE_SCRIPT_URL}?sheet=${sheet}`;
        break;
    }

    if (!targetUrl) {
      console.error(`[sheets API] Variable de entorno no configurada para: ${sheet}`);
      return res.status(500).json([]);
    }

    // 3. Fetch server-side — la URL nunca llega al browser
    const response = await fetch(targetUrl);

    if (!response.ok) {
      throw new Error(`Error al obtener datos de Google: ${response.status}`);
    }

    const rawData = await response.text();

    // 4. Parsear: puede ser CSV (Sheets pub) o JSON (Apps Script)
    let parsedData;
    try {
      parsedData = JSON.parse(rawData);
      // Apps Script a veces envuelve en { data: [...] }
      if (parsedData && !Array.isArray(parsedData) && Array.isArray(parsedData.data)) {
        parsedData = parsedData.data;
      }
    } catch {
      // Si no es JSON, parseamos como CSV
      const result = Papa.parse(rawData, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false,
      });
      parsedData = result.data;
    }

    // 5. Respuesta con cache corto para evitar excesivas llamadas a Google
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json(parsedData);

  } catch (error) {
    console.error(`[sheets API] Error en hoja "${sheet}":`, error.message);
    return res.status(500).json([]);
  }
}
