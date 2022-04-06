import Link from "next/link";
import Spinner from "../spinner/Spinner";
import { usePosts } from "../../../hooks/usePosts";
import PostCard from "./PostCard";

export default function News() {
  const { loading, posts } = usePosts({ limit: 4 });

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
        {/* {posts.length >= 4 && (
          <div className="text-center">
            <Link href="/noticias">
              <a className="btn btn-sm btn-light">ver más noticias</a>
            </Link>
          </div>
        )} */}
      </div>
    </section>
  );
}
