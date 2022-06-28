export async function getSinglePost({ id = null }) {
  const apiURL = `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts/${id}`;

  if (!id) {
    return;
  }

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
