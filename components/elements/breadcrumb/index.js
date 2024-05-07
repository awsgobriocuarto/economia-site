import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toLowerCase();
};

const Breadcrumbs = ({ title }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  const linkPath = router.asPath.split("/");
  linkPath.shift();

  // console.log(linkPath[0]);
  // console.log(title);

  useEffect(() => {
    if (router) {
      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });
      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className="container">
      <nav aria-label="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {/* <a href="/">Home</a> */}
            <Link href="/">Home</Link>
          </li>
          {breadcrumbs.map((breadcrumb, i) => {
            return (
              <li key={breadcrumb.href} className="breadcrumb-item">
                {breadcrumbs.length - 1 === i ? (
                  linkPath[0] !== "noticias" ? (
                    <>{convertBreadcrumb(breadcrumb.breadcrumb)}</>
                  ) : (
                    ""
                  )
                ) : (
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
