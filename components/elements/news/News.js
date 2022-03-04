import Link from "next/link";
import React from "react";

const items = [
  {
    id: 1,
    title: "lom",
    imgUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    url: "",
  },
  {
    id: 2,
    title: "Deudas y Pagos",
    imgUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    url: "",
  },
  {
    id: 3,
    title: "Deudas y Pagos",
    imgUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    url: "",
  },
  {
    id: 4,
    title: "Deudas y Pagos",
    imgUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    url: "",
  },
];

export const News = () => {
  return (
    <section className="news">
      <div className="container">
        <h2>Novedades</h2>
        <div className="row mb-5">
          {items.map((item) => (
            <div key={item.id} className="col-md-3">
              <div className="card">
                <div className="card-image">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="card-body">
                  <small>02/03/2022</small>
                  <h5 className="card-title">Lorem, ipsum dolor.</h5>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Link href="/noticias/titulo-de-la-noticia">
                    <a className="btn btn-dark btn-sm text-white">ver más</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/noticias">
            <a className="btn btn-sm btn-light">ver más noticias</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
