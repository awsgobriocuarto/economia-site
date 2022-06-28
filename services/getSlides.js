const fromApiResponseToSlides = (apiResponse) => {
  const { data = [] } = apiResponse;

  data.sort(function (a, b) {
    if (a.id < b.id) {
      return 1;
    } else if (a.id > b.id) {
      return -1;
    }
    return 0;
  });

  if (Array.isArray(data.sort())) {
    const slides = data.map((slide) => {
      return {
        ...slide,
      };
    });

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
