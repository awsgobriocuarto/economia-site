import { apiClient } from '../utils/apiClient';

export async function getSinglePost({ id = null }) {
  if (!id) return null;

  const url = `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts/${id}`;
  try {
    const response = await apiClient(url);
    return response?.data ?? null;
  } catch (error) {
    console.error('Error en getSinglePost:', error);
    return null;
  }
}
