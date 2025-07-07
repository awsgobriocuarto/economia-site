import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const convertBreadcrumb = (string) => {
  return (
    string
      .replace(/-/g, " ")
      .replace(/oe/g, "ö")
      .replace(/ae/g, "ä")
      // .replace(/ue/g, "ü") // Se mantiene comentado como en tu código original
      .toLowerCase()
  );
};

const Breadcrumbs = ({ title }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    // Asegurarse de que router.asPath esté disponible y sea una cadena no vacía
    if (router && router.asPath) {
      // Divide la ruta y filtra los segmentos vacíos (como el del inicio "/")
      const pathSegments = router.asPath.split('/').filter(segment => segment !== '');

      const pathArray = pathSegments.map((path, i) => {
        return {
          breadcrumb: path,
          // Reconstruye el 'href' para cada segmento (ej: "/segmento1", "/segmento1/segmento2")
          href: "/" + pathSegments.slice(0, i + 1).join("/"),
        };
      });
      setBreadcrumbs(pathArray);
    } else {
      // Si router.asPath no está disponible o está vacío (ej: ruta raíz sin segmentos),
      // inicializa breadcrumbs como un array vacío.
      setBreadcrumbs([]);
    }
  }, [router.asPath, router]); // <-- ¡La clave está aquí! Solo depende de router.asPath.
  // Como router.asPath es una cadena (primitiva), solo cambia
  // cuando la URL realmente navega, evitando el bucle infinito.

  if (!breadcrumbs) {
    return null; // No renderiza nada si breadcrumbs aún no se ha inicializado
  }

  // Se deriva el primer segmento de la ruta aquí, una vez que breadcrumbs ya está establecido.
  const firstPathSegment = breadcrumbs.length > 0 ? breadcrumbs[0].breadcrumb : '';

  return (
    <div className="container">
      <nav aria-label="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          {breadcrumbs.map((breadcrumb, i) => {
            const isLast = breadcrumbs.length - 1 === i;

            return (
              <li key={breadcrumb.href} className="breadcrumb-item">
                {isLast ? (
                  // Si es el último elemento, renderiza el texto sin enlace
                  firstPathSegment !== "noticias" ? (
                    <>{convertBreadcrumb(breadcrumb.breadcrumb)}</>
                  ) : (
                    // Si el primer segmento es "noticias", no renderiza el último breadcrumb
                    ""
                  )
                ) : (
                  // Si no es el último, renderiza un enlace
                  <Link href={breadcrumb.href}>
                    <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;