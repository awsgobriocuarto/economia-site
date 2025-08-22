export function getDeclarations() {
  const apiURL = `https://ddjjdev.gobiernoriocuarto.gob.ar/api/position`;
  return fetch(apiURL)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error: ", error);
    });
}
