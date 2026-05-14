import { apiClient } from '../utils/apiClient';

const fromApiResponseToSlides = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (!Array.isArray(data)) return [];
  return [...data].sort((a, b) => (b.id > a.id ? 1 : b.id < a.id ? -1 : 0));
};

export async function getSlides() {
  const url = `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/placements/1/banners`;
  try {
    const response = await apiClient(url);
    return fromApiResponseToSlides(response);
  } catch (error) {
    console.error('Error en getSlides:', error);
    return [];
  }
}
