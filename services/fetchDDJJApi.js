export function getDeclarations() {
  const apiURL = `https://script.google.com/macros/s/AKfycbzuMFJ-6cnbzQxiwQa2bi2wW29IfQPwdxzfy59dA8rQpUQ_fuQAz1ctxQHBMHhXlCxjQQ/exec?section=fetchDDJJApi`;
  return fetch(apiURL)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching DDJJ: ", error);
    });
}
