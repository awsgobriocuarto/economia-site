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
  const API_URL = "https://admin.tramitesdev.riocuarto.gob.ar";
  const API_TOKEN = "Bearer 1|Dn58lwU4vJcuXXSMtdAyYBhyc5NZyRXWZFNgMney";
  const API_OPTIONS = {
    headers: {
      Authorization: API_TOKEN,
    },
    cache: "no-store",
  };

  return fetch(
    `${API_URL}/api/tramites?area=secretaria-de-economia`,
    API_OPTIONS
  )
    .then((res) => res.json())
    .then(fromApiResponseToPosts)
    .catch((error) => {
      console.error("Error: ", error);
    });
}
