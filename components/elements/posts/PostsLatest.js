import Link from "next/link";
import Spinner from "../spinner/Spinner";
import { usePosts } from "../../../hooks/usePosts";
import PostCard from "./PostCard";

export default function PostsLatest({ limit }) {
  const { loading, posts } = usePosts({ limit });

  if (loading) {
    return <Spinner />;
  }

  if (posts?.length == 0) {
    return "";
  }

  return (
    <section className="news">
      <div className="container">
        <h2>Últimas Novedades</h2>
        <div className="row mb-5">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/noticias">
            <a className="btn btn-sm btn-primary text-white">
              ver más noticias
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
