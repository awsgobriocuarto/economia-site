import Link from "next/link";
import Spinner from "../spinner/Spinner";
import { usePosts } from "../../../hooks/usePosts";
import PostCard from "./PostCard";
import SectionHeader from "../../SectionHeader";

export default function PostsLatest({ limit }) {
  const { loading, posts } = usePosts({ limit });

  // if (loading) {
  //   return <Spinner />;
  // }

  if (posts?.length == 0) {
    return "";
  }

  return (
    <section className="news py-5">
      <div className="container position-relative">
        <SectionHeader 
          title="NOVEDADES" 
          subtitle="NOTICIAS Y ANUNCIOS DE LA CIUDAD" 
        />
        
        <div className="carousel-news-container">
          <div className="carousel-news-track" id="news-track">
            {posts?.map((post) => (
              <PostCard key={post.id} post={post} className="carousel-news-item" />
            ))}
          </div>


          <button 
            className="carousel-control-prev-custom" 
            onClick={() => {
              document.getElementById('news-track').scrollBy({ left: -400, behavior: 'smooth' });
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            className="carousel-control-next-custom" 
            onClick={() => {
              document.getElementById('news-track').scrollBy({ left: 400, behavior: 'smooth' });
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="text-center mt-5">
          <Link href="/noticias">
          <a className="btn btn-outline-info btn-lg px-5 py-3 rounded-pill" style={{ fontWeight: 600, borderWidth: '1.5px' }}>
              Ver más noticias
            </a>
          </Link>
        </div>
      </div>
    </section>

  );
}
