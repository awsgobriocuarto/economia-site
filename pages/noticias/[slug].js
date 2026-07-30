import React from "react";
import { useRouter } from "next/router";
import moment from "moment";
import Head from "next/head";
import useSinglePost from "../../hooks/useSinglePost";
import Spinner from "../../components/elements/spinner/Spinner";
import SectionHeader from "../../components/SectionHeader";
import PostsLatest from "../../components/elements/posts/PostsLatest";
import { getPostCoverImage } from "../../utils/getPostCoverImage";

export default function Noticias() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, isError, post } = useSinglePost({ id });

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="container py-5 text-center">
        <h2>Contenido no encontrado</h2>
      </div>
    );
  }

  const coverImage = getPostCoverImage(post);

  return (
    <>
      <Head>
        <meta property="og:title" content={post?.title} key="ogtitle" />
        <meta property="og:description" content={post?.excerpt} key="ogdesc" />
        {coverImage && (
          <meta property="og:image" content={coverImage} key="ogimage" />
        )}
        <title>{post?.title} - Economía Río Cuarto</title>
      </Head>

      {/* Cabecera Full Width con Imagen */}
      {coverImage && (
        <div className="post-header-wrapper">
          <SectionHeader 
            title=""
            bgImage={coverImage}
            className="post-detail-header"
          />
        </div>
      )}

      <div className="post-detail-body py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8">
              <div className="post-meta mb-4 d-flex align-items-center gap-3">
                <span className="badge bg-primary px-3 py-2">
                  {moment(post?.publication_date).format("DD/MM/YYYY")}
                </span>
                <div className="divider-h" style={{ width: '40px', height: '2px', background: '#e2e8f0' }}></div>
              </div>

              <h1 className="display-5 fw-bold mb-4" style={{ color: '#1a2840' }}>
                {post?.title}
              </h1>

              {post?.excerpt && (
                <p className="lead mb-4 text-muted fw-normal" style={{ fontSize: '1.4rem', lineHeight: '1.6' }}>
                  {post?.excerpt}
                </p>
              )}

              {/* Imagen de Portada Principal */}
              {coverImage && (
                <div className="post-cover-main mb-4 text-center">
                  <img 
                    src={coverImage} 
                    alt={post?.title || "Imagen de portada"} 
                    className="img-fluid rounded-3 shadow-sm w-100"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                  />
                </div>
              )}

              <div 
                className="post-content"
                style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4a5568' }}
                dangerouslySetInnerHTML={{ __html: post?.body }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5 opacity-5" />

      {/* Slider Relacionado */}
      <PostsLatest 
        limit={4} 
        title="TE PUEDE INTERESAR" 
      />

      <style jsx global>{`
        .post-detail-header {
            min-height: 400px !important;
            border-radius: 0 !important;
            margin-bottom: 0 !important;
            box-shadow: none !important;
            background-color: #f8fafc;
        }
        
        /* Eliminar Overlay e Icono por CSS */
        .post-detail-header :global(.section-header__overlay),
        .post-detail-header :global(.section-header__icon),
        .post-detail-header :global(.section-header__content) {
            display: none !important;
        }

        .post-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0 !important;
            margin: 2rem 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
            .post-detail-header {
                min-height: 250px !important;
            }
        }
      `}</style>
    </>
  );
}
