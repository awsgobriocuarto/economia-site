import React from "react";
import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import PostCard from "../components/elements/posts/PostCard";
import { innovacionPosts } from "../data/innovacionPosts";

export default function Innovacion() {
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
            {/* Ocultado temporalmente
            {innovacionPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            */}
            <div className="col-12 text-center py-5 my-5">
               <h4 className="text-muted fw-normal">Próximamente</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
