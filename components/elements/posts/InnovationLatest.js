import React, { useState, useEffect } from "react";
import Link from "next/link";
import PostCard from "./PostCard";
import SectionHeader from "../../SectionHeader";
import Spinner from "../spinner/Spinner";

export default function InnovationLatest() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/innovacion");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        
        // Tomamos los posts de la respuesta proxy
        setPosts(json.posts || []);
      } catch (err) {
        console.error("Error al obtener los posts de innovación:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="news py-5" style={{ background: '#f8f9fc' }}>
        <div className="container text-center py-5">
          <Spinner />
          <p className="text-muted mt-3">Cargando novedades...</p>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return null; // Ocultamos la sección si hay un error o no hay posts
  }

  return (
    <section className="news py-5" style={{ background: '#f8f9fc' }}>
      <div className="container position-relative">
        <SectionHeader
          title="INNOVACIÓN Y DESARROLLO"
          className="mb-5"
        />

        <div className="carousel-news-container">
          <div className="carousel-news-track" id="innovation-track">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} className="carousel-news-item" />
            ))}
            
            {/* Tarjeta Ver Más */}
            <div className="carousel-news-item">
              <Link href="/innovacion">
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
            document.getElementById('innovation-track').scrollBy({ left: -400, behavior: 'smooth' });
          }}
          aria-label="Anterior"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          className="carousel-control-next-custom"
          onClick={() => {
            document.getElementById('innovation-track').scrollBy({ left: 400, behavior: 'smooth' });
          }}
          aria-label="Siguiente"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

      </div>
    </section>
  );
}
