/**
 * Mapea un post de la API externa de Gobierno al formato unificado de la aplicación.
 * @param {Object} post - Post crudo de la API externa.
 * @return {Object} Post mapeado para PostCard.
 */
export function mapExternalPost(post) {
  if (!post) return null;

  // Imagen por defecto inspiradora de tecnología e innovación
  const defaultImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";
  const imageUrl = post.image || defaultImage;

  return {
    id: String(post.id),
    type: "innovacion",
    title: post.title || "Novedad de Innovación",
    excerpt: post.excerpt || "",
    publication_date: post.published_at || post.created_at || new Date().toISOString(),
    slug: post.slug || String(post.id),
    main_picture: {
      original: imageUrl,
      small: imageUrl
    },
    body: post.body || ""
  };
}
