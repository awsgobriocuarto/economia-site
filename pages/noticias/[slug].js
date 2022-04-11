import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import useSinglePost from "../../hooks/useSinglePost";
import Spinner from "../../components/elements/spinner/Spinner";

export default function Noticias() {
  const router = useRouter();
  const id = router.query.id;
  // console.log(parseInt(id));

  // if (!parseInt(id)) {
  //   //router.push("/404");
  //   console.log("string");
  // } else {
  //   console.log("number");
  // }

  const { loading, isError, post } = useSinglePost({ id });
  console.log({ loading, isError, post });

  if (isError) {
    // return router.push("/");
    // ("Contenido no encontrado");
  }

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
                      <img src={post?.media.main_picture.large} alt="" />

                      <h1>{post?.title}</h1>
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
