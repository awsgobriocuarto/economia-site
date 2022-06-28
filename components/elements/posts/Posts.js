import Spinner from "../spinner/Spinner";
import { usePosts } from "../../../hooks/usePosts";
import PostCard from "./PostCard";

export default function Posts({ limit }) {
  const { loading, posts, loadingNextPage, setPage } = usePosts({ limit });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) {
    return <Spinner />;
  }

  if (posts?.length == 0) {
    return "";
  }

  return (
    <section className="news">
      <div className="container">
        <h2>Novedades</h2>
        <div className="row mb-5">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center">
          {loadingNextPage ? (
            <Spinner />
          ) : (
            <button
              onClick={handleNextPage}
              className="btn btn-sm btn-primary text-white"
            >
              Cargar mas noticias
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
