/**
 * Extrae la imagen de portada de un objeto de post independientemente de la estructura de la API.
 * @param {Object} post - Objeto de publicación.
 * @returns {string|null} URL de la imagen de portada o null.
 */
export function getPostCoverImage(post) {
  if (!post) return null;

  // 1. Cadena directa en main_picture
  if (typeof post.main_picture === "string" && post.main_picture.trim()) {
    return post.main_picture.trim();
  }

  // 2. Cadena directa en image
  if (typeof post.image === "string" && post.image.trim()) {
    return post.image.trim();
  }

  // 3. Objeto dentro de media.main_picture (API de contenidos - post individual)
  const mediaPic = post.media?.main_picture;
  if (mediaPic) {
    if (typeof mediaPic === "string" && mediaPic.trim()) return mediaPic.trim();
    if (typeof mediaPic === "object") {
      const url =
        mediaPic.large ||
        mediaPic.medium ||
        mediaPic.original ||
        mediaPic.path ||
        mediaPic.small ||
        mediaPic.thumb;
      if (url) return url;
    }
  }

  // 4. Objeto dentro de main_picture (API de contenidos - listado)
  const mainPic = post.main_picture;
  if (mainPic && typeof mainPic === "object") {
    const url =
      mainPic.large ||
      mainPic.medium ||
      mainPic.original ||
      mainPic.path ||
      mainPic.small ||
      mainPic.thumb;
    if (url) return url;
  }

  // 5. Cadena directa en media
  if (typeof post.media === "string" && post.media.trim()) {
    return post.media.trim();
  }

  return null;
}
