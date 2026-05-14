import { apiClient } from '../utils/apiClient';

const fromApiResponseToPosts = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    return data.map((post) => ({ ...post }));
  }
  return [];
};

export async function getPosts({ page = 1, limit = 9 } = {}) {
  const url = `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}&page=${page}`;
  try {
    const response = await apiClient(url);
    return fromApiResponseToPosts(response);
  } catch (error) {
    console.error('Error en getPosts:', error);
    return [];
  }
}
