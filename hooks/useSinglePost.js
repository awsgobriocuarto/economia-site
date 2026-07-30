import { useEffect, useState } from "react";
import { getSinglePost } from "../services/getSinglePost";

export default function useSinglePost({ id }) {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(
    function () {
      if (!id) return;
      setLoading(true);
      getSinglePost({ id })
        .then((postData) => {
          if (!postData || (Array.isArray(postData) && postData.length === 0)) {
            setIsError(true);
          } else {
            setPost(Array.isArray(postData) ? postData[0] : postData);
            setIsError(false);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error cargando el post individual:", err);
          setLoading(false);
          setIsError(true);
        });
    },
    [id]
  );

  return { loading: !id || loading, isError, post };
}
