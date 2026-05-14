/**
 * Cliente de API centralizado para Next.js (Pages Router)
 * - Centraliza el header Portal-Id requerido por la API de contenidos
 * - Valida res.ok antes de parsear JSON (evita crash con errores 4xx/5xx)
 * - Retorna array vacío en caso de error para mantener consistencia
 */
export const apiClient = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Portal-Id': '3',
        ...options.headers,
      },
    });

    if (!response.ok) {
      console.error(`[apiClient] Error ${response.status} en: ${endpoint}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('[apiClient] Error de red o parseo:', error);
    return [];
  }
};
