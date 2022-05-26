import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import useSinglePost from "../../hooks/useSinglePost";
import Spinner from "../../components/elements/spinner/Spinner";
import PostGallery from "../../components/elements/posts/PostGallery";

export default function Noticias() {
  const router = useRouter();
  const id = router.query.id;

  const { loading, isError, post } = useSinglePost({ id });
  console.log({ loading });

  // const src = { src: post?.media.main_picture.large.lenght };
  // console.log(src);

  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
      </Head>

      <Header title="Novedad" subtitle="" />

      <div className="posts detail">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8">
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
    </>
  );
}
