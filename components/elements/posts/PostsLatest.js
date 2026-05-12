import Link from "next/link";
import Spinner from "../spinner/Spinner";
import { usePosts } from "../../../hooks/usePosts";
import PostCard from "./PostCard";
import SectionHeader from "../../SectionHeader";

export default function PostsLatest({ limit, title = "NOVEDADES" }) {
  const { loading, posts } = usePosts({ limit });

  if (posts?.length == 0) {
    return "";
  }

  return (
    <section className="news py-5">
      <div className="container position-relative">
        <SectionHeader 
          title={title} 
          className="mb-5"
        />
        
        <div className="carousel-news-container">
          <div className="carousel-news-track" id="news-track">
            {posts?.map((post) => (
              <PostCard key={post.id} post={post} className="carousel-news-item" />
            ))}
            
            {/* Tarjeta Ver Más */}
            <div className="carousel-news-item">
              <Link href="/noticias">
                <a className="news-card-more">
                  <div className="icon-plus">+</div>
                  <div className="text-more">Ver más</div>
                </a>
              </Link>
            </div>
          </div>
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
    </section>
  );
}
