import { mapExternalPost } from "../../utils/mapExternalPost";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { page = 1 } = req.query;
  const apiUrl = `${process.env.EXTERNAL_API_URL || 'https://gestionweb.gobiernoriocuarto.gob.ar/api/v1/posts'}?area=131&page=${page}`;
  const apiToken = process.env.EXTERNAL_API_TOKEN;

  try {
    const headers = {
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    };

    if (apiToken) {
      headers["Authorization"] = `Bearer ${apiToken}`;
    }

    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      throw new Error(`Error HTTP de la API externa: ${response.status}`);
    }

    const json = await response.json();
    const rawPosts = json.data || json || [];
    
    // Mapeamos los posts defensivamente
    const posts = rawPosts.map(mapExternalPost).filter(Boolean);

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=120");
    return res.status(200).json({
      posts,
      pagination: {
        currentPage: json.current_page || 1,
        total: json.total || posts.length,
        lastPage: json.last_page || 1,
        perPage: json.per_page || posts.length
      }
    });

  } catch (error) {
    console.error("[api/innovacion] Error fetching posts:", error.message);
    return res.status(500).json({ error: "Error al consultar la API de innovación" });
  }
}
