import React from "react";
import Link from "next/link";
import PostCard from "./PostCard";
import SectionHeader from "../../SectionHeader";

const innovationSystems = [
  {
    id: "sys1",
    title: "CIDI — Ciudadano Digital",
    excerpt: "Plataforma centralizada para la gestión de trámites y servicios municipales de forma digital y segura.",
    publication_date: "2024-01-15",
    slug: "cidi-ciudadano-digital",
    main_picture: {
      original: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      small: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "sys2",
    title: "Compras Web",
    excerpt: "Sistema de gestión de compras y licitaciones para proveedores del municipio, fomentando la transparencia.",
    publication_date: "2024-02-10",
    slug: "compras-web",
    main_picture: {
      original: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      small: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "sys3",
    title: "Turnos Inteligentes",
    excerpt: "Optimización de la atención al vecino mediante un sistema de turnos dinámico y multiplataforma.",
    publication_date: "2024-03-05",
    slug: "turnos-inteligentes",
    main_picture: {
      original: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
      small: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "sys4",
    title: "Portal de Transparencia",
    excerpt: "Visualización de datos públicos y ejecución presupuestaria para el libre acceso a la información.",
    publication_date: "2024-03-20",
    slug: "portal-transparencia",
    main_picture: {
      original: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      small: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80"
    }
  }

];

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
            {innovationSystems.map((system) => (
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
