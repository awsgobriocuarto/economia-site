export async function getSinglePost({ id } = {}) {
  const apiURL = `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts/${id}`;

  return await fetch(apiURL, {
    headers: {
      "Portal-Id": 3,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return response.data;
    });
}
