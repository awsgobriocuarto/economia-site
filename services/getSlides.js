const fromApiResponseToSlides = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const slides = data.map((slide) => {
      return {
        ...slide,
      };
    });
    console.log(slides);
    return slides;
  }
  return [];
};

export function getSlides() {
  const apiURL = `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/placements/1/banners`;
  return fetch(apiURL, {
    headers: {
      "Portal-Id": 3,
    },
  })
    .then((res) => res.json())
    .then(fromApiResponseToSlides)
    .catch((error) => {
      console.error("Error: ", error);
    });
}
