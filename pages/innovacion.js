import React from "react";
import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import PostCard from "../components/elements/posts/PostCard";

const innovationSystems = [
  {
    id: "sys1",
    title: "CIDI — Ciudadano Digital",
    excerpt: "Plataforma centralizada para la gestión de trámites y servicios municipales de forma digital y segura.",
    publication_date: "2024-01-15",
    slug: "cidi-ciudadano-digital",
    main_picture: {
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
      small: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80"
    }
  }
];

export default function Innovacion() {
  return (
    <>
      <Head>
        <title>Innovación y Tecnología — Municipalidad de Río Cuarto</title>
        <meta name="description" content="Sistemas y desarrollos tecnológicos de la Secretaría de Economía e Innovación." />
      </Head>

      <section className="pb-5">
        <div className="container">
          <SectionHeader 
            title="INNOVACIÓN" 
            subtitle="SISTEMAS Y DESARROLLOS TECNOLÓGICOS" 
            bgImage="/images/section-bg-innovacion.png"
          />
        </div>

        <div className="container py-5">
          <div className="row g-4 news">
            {innovationSystems.map((system) => (
              <PostCard key={system.id} post={system} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
          <div className="container text-center">
              <h2 className="display-6 fw-bold mb-4">Transformación Digital</h2>
              <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
                  Desde la Dirección de Innovación trabajamos diariamente para modernizar la gestión pública, 
                  haciéndola más eficiente, transparente y cercana al ciudadano mediante el uso estratégico de la tecnología.
              </p>
          </div>
      </section>
    </>
  );
}
