export function getDeclarations() {
  const apiURL = `https://ddjj.gobiernoriocuarto.gob.ar/api/position`;
  return fetch(apiURL)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error: ", error);
    });
}
