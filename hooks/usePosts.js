import { useEffect, useState } from "react";
import { getPosts } from "../services/getPosts";

const INITIAL_PAGE = 1;

export function usePosts({ limit = null } = {}) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [posts, setPosts] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getPosts({ limit }).then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
    },
    [setPosts, limit]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      setLoadingNextPage(true);
      getPosts({ page }).then((nextPosts) => {
        setPosts((prevPosts) => prevPosts.concat(nextPosts));
        setLoadingNextPage(false);
      });
    },
    [page]
  );

  return { loading, loadingNextPage, posts, setPage };
}
