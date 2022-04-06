import { useEffect, useState } from "react";
import { getSinglePost } from "../services/getSinglePost";

export default function useSinglePost({ id }) {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(
    function () {
      setLoading(true);
      getSinglePost({ id })
        .then((post) => {
          if (post == null || post.length > 1) {
            setIsError(true);
          } else {
            setPost(post);
            setIsError(false);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setIsError(true);
        });
    },
    [id]
  );

  return { loading, isError, post };
}
