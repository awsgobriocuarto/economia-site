import React from "react";
import Link from "next/link";
import PostCard from "./PostCard";
import SectionHeader from "../../SectionHeader";
import { innovacionPosts } from "../../../data/innovacionPosts";

export default function InnovationLatest() {
  return (
    <section className="news py-5" style={{ background: '#f8f9fc' }}>
      <div className="container position-relative">
        <SectionHeader
          title="INNOVACIÓN Y DESARROLLO"
          className="mb-5"
        />

        <div className="carousel-news-container">
          <div className="carousel-news-track" id="innovation-track">
            {innovacionPosts.map((system) => (
              <PostCard key={system.id} post={system} className="carousel-news-item" />
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
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          className="carousel-control-next-custom"
          onClick={() => {
            document.getElementById('innovation-track').scrollBy({ left: 400, behavior: 'smooth' });
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>

      </div>
    </section>
  );
}
