import moment from "moment";

const fromApiResponseToExpiration = (apiResponse) => {
  const data = apiResponse;
  if (Array.isArray(data)) {
    const expirations = data.map((expiration) => {
      return {
        ...expiration,
      };
    });
    return expirations;
  }
  return [];
};

export function getExpirations() {
  const today = moment().format("YYYY-MM-DD");
  const apiURL = `https://atriv.herokuapp.com/vencimientos?_sort=fecha:ASC&_limit=4&fecha_gte=${today}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToExpiration);
}
