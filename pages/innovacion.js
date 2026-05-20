import React from "react";
import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import PostCard from "../components/elements/posts/PostCard";
import { mapExternalPost } from "../utils/mapExternalPost";

export default function Innovacion({ posts, error }) {
  return (
    <>
      <Head>
        <title>Desarrollos e Innovación — Municipalidad de Río Cuarto</title>
        <meta name="description" content="Desarrollos e innovación de la Secretaría de Economía." />
      </Head>

      <section className="pt-5 pb-5">
        <div className="container">
          <SectionHeader title="DESARROLLOS E INNOVACIÓN" />

          <div className="row g-4 news mt-3">
            {error ? (
              <div className="col-12 text-center py-5 my-5">
                <h5 className="text-danger fw-normal">No se pudieron cargar las novedades en este momento.</h5>
                <p className="text-muted">Por favor, intente de nuevo más tarde.</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="col-12 text-center py-5 my-5">
                <h5 className="text-muted fw-normal">No hay novedades publicadas por el momento.</h5>
              </div>
            ) : (
              posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const apiUrl = process.env.EXTERNAL_API_URL || 'https://gestionweb.gobiernoriocuarto.gob.ar/api/v1/posts';
  const apiToken = process.env.EXTERNAL_API_TOKEN;

  try {
    const headers = {
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    };

    if (apiToken) {
      headers["Authorization"] = `Bearer ${apiToken}`;
    }

    const response = await fetch(`${apiUrl}?area=131`, { headers });

    if (!response.ok) {
      throw new Error(`Error HTTP de la API externa: ${response.status}`);
    }

    const json = await response.json();
    const rawPosts = json.data || json || [];
    const posts = rawPosts.map(mapExternalPost).filter(Boolean);

    return {
      props: {
        posts,
        error: false
      }
    };
  } catch (error) {
    console.error("Error en getServerSideProps de innovacion.js:", error.message);
    return {
      props: {
        posts: [],
        error: true
      }
    };
  }
}
