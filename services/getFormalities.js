const API_BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;
const API_TOKEN = process.env.API_TOKEN;

if (!API_BASE_URL || !API_TOKEN) {
  throw new Error("API_BASE_URL o API_TOKEN no están definidas en el entorno");
}

const API_URL = `${API_BASE_URL}/api${API_VERSION ? `/${API_VERSION}` : ""}`;


const fromApiResponseToPosts = (apiResponse) => {
  const data = apiResponse;
  if (Array.isArray(data)) {
    const formalities = data.map((formality) => {
      return {
        //...formality,
        //TODO: format date
        // publication_date: post.publication_date,
        id: formality.id,
        title: formality.title,
        description: formality.summary,
        urlStart: formality.url,
        urlMore: formality.slug,
      };
    });
    return formalities;
  }
  return [];
};

export function getFormalities() {
  const API_OPTIONS = {
    headers: {
      Authorization: API_TOKEN,
    },
    cache: "no-store",
  };

  return fetch(
    `${API_URL}/tramites?area=secretaria-de-economia-e-innovacion`,
    API_OPTIONS
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`);
      }
      return res.json();
    })
    .then(fromApiResponseToPosts)
    .catch((error) => {
      console.error("Error: ", error);
      return [];
    });
}
