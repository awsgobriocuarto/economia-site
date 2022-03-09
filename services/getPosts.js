const fromApiResponseToPosts = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const posts = data.map((post) => {
      return {
        ...post,
        //TODO: format date
        // publication_date: post.publication_date,
      };
    });
    return posts;
  }
  return [];
};

export function getPosts({ page = 1, limit = 9 } = {}) {
  const apiURL = page
    ? `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}&page=${page}`
    : `https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=${limit}`;
  return fetch(apiURL, {
    headers: {
      "Portal-Id": 2,
    },
  })
    .then((res) => res.json())
    .then(fromApiResponseToPosts);
}
