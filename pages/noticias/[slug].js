import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import Head from "next/head";
import Header from "../../components/Header";
import useSinglePost from "../../hooks/useSinglePost";
import Spinner from "../../components/elements/spinner/Spinner";
import PostGallery from "../../components/elements/posts/PostGallery";
import PostsLatest from "../../components/elements/posts/PostsLatest";

export default function Noticias() {
  const [news, setNews] = useState(false);
  const router = useRouter();
  const id = router.query.id;

  const fullPath = `https://economiariocuarto.gob.ar${router.asPath}`;
  console.log(fullPath);

  const { loading, isError, post } = useSinglePost({ id });

  useEffect(() => {
    if (!loading) {
      setNews(true);
    }
  }, [loading]);

  return (
    <>
      <Head>
        {/* Open Graph */}
        <meta property="og:title" content={post?.title} key="ogtitle" />
        <meta property="og:description" content={post?.excerpt} key="ogdesc" />
        <meta
          property="og:image"
          content={post?.media.main_picture.large}
          key="ogimage"
        />
        <title>{post?.title}</title>
      </Head>

      <Header title="Novedad" subtitle="" />

      <div className="posts detail">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-xl-10 col-xxl-8">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {!isError ? (
                    <>
                      {post?.media?.gallery?.length ? (
                        <PostGallery images={post?.media} />
                      ) : (
                        <img
                          className="cover"
                          src={post?.media.main_picture.large}
                          alt=""
                        />
                      )}
                      {moment(post?.publication_date).format("DD/MM/YYYY")}
                      <h2>{post?.title}</h2>
                      <p className="lead">{post?.excerpt}</p>
                      <div
                        dangerouslySetInnerHTML={{ __html: post?.body }}
                      ></div>
                    </>
                  ) : (
                    "Contenido no encontrado"
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {news && <PostsLatest limit={4} />}
    </>
  );
}
