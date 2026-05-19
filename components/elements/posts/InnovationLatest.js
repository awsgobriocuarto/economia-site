import React from "react";
import Link from "next/link";
import PostCard from "./PostCard";
import SectionHeader from "../../SectionHeader";

const innovationSystems = [
  {
    id: "post1",
    title: "Se implementa una plataforma digital para el mantenimiento de espacios verdes",
    excerpt: "A través de un sistema de monitoreo en tiempo real y certificación fotográfica, el Equipo de Innovación unifica el trabajo de áreas municipales y vecinales para garantizar plazas, parques y espacios públicos siempre en condiciones.",
    publication_date: "2024-05-19T00:00:00Z",
    slug: "plataforma-digital-mantenimiento-espacios-verdes",
    main_picture: {
      original: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
      small: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "post2",
    title: "Loteo “Renovar Sueños”: Nueva plataforma digital para un proceso seguro y transparente",
    excerpt: "A través de un desarrollo web propio que integró mapas interactivos y simuladores de cuotas, el Equipo de Innovación gestionó la inscripción de más de 9.000 vecinos, garantizando transparencia y eficiencia en el proceso del sorteo de 167 lotes municipales.",
    publication_date: "2024-05-18T00:00:00Z",
    slug: "loteo-renovar-suenos-plataforma-digital",
    main_picture: {
      original: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      small: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "post3",
    title: "Noche Segura: el Programa “Más 16” utiliza la tecnología para proteger a los jóvenes",
    excerpt: "A través de una plataforma de autorizaciones electrónicas vinculada a CiDi, el Equipo de Innovación desarrolló un sistema de trazabilidad que ordena el esparcimiento juvenil, brinda tranquilidad a las familias y elimina la informalidad en los controles de acceso.",
    publication_date: "2024-05-17T00:00:00Z",
    slug: "noche-segura-programa-mas-16",
    main_picture: {
      original: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      small: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "post4",
    title: "Transparencia 4.0: Río Cuarto digitaliza las Declaraciones Juradas para fortalecer el control público",
    excerpt: "En cumplimiento con la Ordenanza 257/25, el Equipo de Innovación desarrolló un sistema de encriptación asimétrica que reemplaza el papel por un proceso digital seguro, garantizando la integridad de los datos patrimoniales de los funcionarios.",
    publication_date: "2024-05-16T00:00:00Z",
    slug: "transparencia-4-0-declaraciones-juradas",
    main_picture: {
      original: "https://images.unsplash.com/photo-1510511459019-5efa325f6f4c?auto=format&fit=crop&w=1200&q=80",
      small: "https://images.unsplash.com/photo-1510511459019-5efa325f6f4c?auto=format&fit=crop&w=400&q=80"
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
