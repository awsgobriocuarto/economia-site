const fromApiResponseToLegislations = (apiResponse) => {
  const data = apiResponse;
  if (Array.isArray(data)) {
    const legislations = data.map((legislation) => {
      return {
        ...legislation,
      };
    });
    return legislations;
  }
  return [];
};

export function getLegislations() {
  const apiURL = `https://atriv.herokuapp.com/legislaciones`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToLegislations);
}
