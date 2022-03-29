import { useEffect } from "react";
import { useRouter } from "next/router";
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
    return router.push("/");
  }

  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
      </Head>

      <Header
        title="Novedad"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />

      <div className="container py-5">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {!isError ? (
              <>
                <h1>Detalle de la Noticia</h1>
                <p>{post?.title}</p>
              </>
            ) : (
              "error"
            )}
          </>
        )}
      </div>
    </>
  );
}
